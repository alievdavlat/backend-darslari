"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errohandle = void 0;
const errohandle = (err, req, res, next) => {
    return res.status(err.status).json(err.getErrorInfo());
};
exports.errohandle = errohandle;
