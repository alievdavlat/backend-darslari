"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
    getErrorInfo() {
        return {
            message: this.message || 'Internal server error',
            status: this.status || 500
        };
    }
}
exports.ErrorHandler = ErrorHandler;
