"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequalize_config_1 = __importDefault(require("../config/sequalize.config"));
const users_model_1 = __importDefault(require("./users.model"));
exports.User = users_model_1.default;
sequalize_config_1.default.sync({ alter: true, force: false });
