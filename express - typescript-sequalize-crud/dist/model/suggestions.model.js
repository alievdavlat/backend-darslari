"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequalize_config_1 = __importDefault(require("../config/sequalize.config"));
class Suggestion extends sequelize_1.Model {
}
Suggestion.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: sequalize_config_1.default,
    modelName: 'Suggestion',
});
exports.default = Suggestion;
