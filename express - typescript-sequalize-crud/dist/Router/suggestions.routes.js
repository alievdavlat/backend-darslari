"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Suggestions_controller_1 = __importDefault(require("../controllers/Suggestions.controller"));
const suggestionRoutes = (0, express_1.Router)();
suggestionRoutes
    .get('/suggestions', Suggestions_controller_1.default.GET)
    .get('/suggestions', Suggestions_controller_1.default.GET_BY_ID)
    .post('/suggestions', Suggestions_controller_1.default.POST)
    .put('/suggestions', Suggestions_controller_1.default.PUT)
    .delete('/suggestions', Suggestions_controller_1.default.DELETE);
exports.default = suggestionRoutes;
