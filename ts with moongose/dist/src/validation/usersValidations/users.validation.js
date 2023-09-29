"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsFilterUUID = exports.paramsFilter = exports.usersPutFilter = exports.userPostFilter = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userPostFilter = joi_1.default.object().keys({
    name: joi_1.default.string().required().max(100),
    password: joi_1.default.string().required().max(64),
    status: joi_1.default.number().required().valid(1, 2)
});
exports.usersPutFilter = joi_1.default.object().keys({
    name: joi_1.default.string().max(100),
    password: joi_1.default.string().max(64),
    status: joi_1.default.number().valid(1, 2)
});
exports.paramsFilter = joi_1.default.object().keys({
    id: joi_1.default.string().required()
});
exports.paramsFilterUUID = joi_1.default.object().keys({
    id: joi_1.default.string().uuid({
        version: 'uuidv4'
    }).required()
});
