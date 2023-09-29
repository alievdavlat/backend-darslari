"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_controller_1 = __importDefault(require("../controllers/comments.controller"));
const commentsRouters = (0, express_1.Router)();
commentsRouters
    .get('/comments', comments_controller_1.default.GET)
    .post('/comments', comments_controller_1.default.POST)
    .put('/comments', comments_controller_1.default.PUT);
exports.default = commentsRouters;
