"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const clubs_entity_1 = require("../entities/clubs.entity");
const errorHandler_1 = require("../utils/errorHandler");
const typeorm_config_1 = require("../config/typeorm.config");
const clubs_validation_1 = require("../validations/clubs.validation");
exports.default = {
    GET: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const allClubs = yield typeorm_config_1.typeOrm
            .getRepository(clubs_entity_1.Clubs)
            .find({
            relations: {
                players: true
            }
        })
            .catch(err => next(new errorHandler_1.ErrorHandler(err.message, 503)));
        if (allClubs)
            res.status(201).json(allClubs);
    }),
    POST: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { error, value } = clubs_validation_1.ClubsValidation.validate(req.body);
        if (error)
            next(new errorHandler_1.ErrorHandler(error.message, 400));
        const { name } = value;
        const newclub = yield typeorm_config_1.typeOrm
            .createQueryBuilder().insert().into(clubs_entity_1.Clubs).values({
            name
        }).returning(['id', 'name']).execute().catch(err => next(new errorHandler_1.ErrorHandler(err.message, 503)));
        if (newclub)
            res.status(201).json(newclub);
    })
};
