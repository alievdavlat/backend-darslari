"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequalize_config_1 = __importDefault(require("../config/sequalize.config"));
class UserComment extends sequelize_1.Model {
}
UserComment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    comment_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: sequalize_config_1.default,
    modelName: 'UserComment',
    tableName: 'users_comments',
});
exports.default = UserComment;
