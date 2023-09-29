"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const errorHandlerMiddleware = (err, _, res, next) => {
    return res.status(err.status).json({
        message: err.message,
        data: null,
        status: err.status
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
