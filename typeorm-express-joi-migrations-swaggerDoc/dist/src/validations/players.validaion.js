"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PlayersValidation = joi_1.default.object().keys({
    name: joi_1.default.string().required().max(70),
    id: joi_1.default.string().required()
});
