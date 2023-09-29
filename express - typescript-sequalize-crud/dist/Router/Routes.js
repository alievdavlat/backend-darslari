"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const suggestions_routes_1 = __importDefault(require("./suggestions.routes"));
const comments_Routes_1 = __importDefault(require("./comments.Routes"));
const Routes = (0, express_1.Router)();
exports.default = Routes.use([
    auth_routes_1.default,
    suggestions_routes_1.default,
    comments_Routes_1.default
]);
