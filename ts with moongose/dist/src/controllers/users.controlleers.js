"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../model/index");
const errors_1 = require("../errors/errors");
const users_validation_1 = require("../validation/usersValidations/users.validation");
exports.default = {
    GET: async (req, res, next) => {
        const allusers = await index_1.usersModel
            .find()
            .catch((err) => next(new errors_1.ErrorHandler("users not found", 404)));
        if (allusers)
            res.status(200).json(allusers);
    },
    POST: async (req, res, next) => {
        const { error, value } = users_validation_1.userPostFilter.validate(req.body);
        if (error)
            next(new errors_1.ErrorHandler("values is required", 400));
        const { name, password, status } = value;
        const allusers = await index_1.usersModel
            .create({ name, password, status })
            .catch((err) => next(new errors_1.ErrorHandler("users not found", 404)));
        if (allusers)
            res.status(201).json(allusers);
    },
    PUT: async (req, res, next) => {
        const { id } = req.params;
        const { error, value } = users_validation_1.usersPutFilter.validate(req.body);
        if (error)
            next(new errors_1.ErrorHandler("values required", 400));
        const { name, password, status } = value;
        const query = { _id: id };
        const data = { name, password, status };
        const updatedUsers = await index_1.usersModel
            .findOneAndUpdate(query, data)
            .catch((err) => next(new errors_1.ErrorHandler(err.message, 503)));
        if (updatedUsers)
            res.status(200).json(updatedUsers);
    },
    DELETE: async (req, res, next) => {
        const { id } = req.params;
        const checkUser = await index_1.usersModel.findById({ _id: id });
        if (!checkUser)
            next(new errors_1.ErrorHandler('user not found', 404));
        const deletedUser = await index_1.usersModel.findByIdAndDelete({ _id: id });
        res.status(200).json(deletedUser);
    }
};
