"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComment = exports.SuggUser = exports.Suggestion = exports.Comment = exports.User = void 0;
const sequalize_config_1 = __importDefault(require("../config/sequalize.config"));
const comments_model_1 = __importDefault(require("./comments.model"));
exports.Comment = comments_model_1.default;
const suggUsers_model_1 = __importDefault(require("./suggUsers.model"));
exports.SuggUser = suggUsers_model_1.default;
const suggestions_model_1 = __importDefault(require("./suggestions.model"));
exports.Suggestion = suggestions_model_1.default;
const users_model_1 = __importDefault(require("./users.model"));
exports.User = users_model_1.default;
const usersComments_model_1 = __importDefault(require("./usersComments.model"));
exports.UserComment = usersComments_model_1.default;
users_model_1.default.belongsToMany(comments_model_1.default, { through: 'UserComment', foreignKey: 'user_id' });
comments_model_1.default.belongsToMany(users_model_1.default, { through: 'UserComment', foreignKey: 'comment_id' });
users_model_1.default.belongsToMany(suggestions_model_1.default, { through: 'SuggUser', foreignKey: 'user_id' });
suggestions_model_1.default.belongsToMany(users_model_1.default, { through: 'SuggUser', foreignKey: 'suggestion_id' });
sequalize_config_1.default.sync({ alter: true, force: true });
