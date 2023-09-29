"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, status) {
        super();
        this.message = message || 'Internal server Error';
        this.status = status || 500;
    }
    getError() {
        return {
            message: this.message,
            status: this.status
        };
    }
}
exports.ErrorHandler = ErrorHandler;
