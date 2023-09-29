"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controlleers_1 = __importDefault(require("../../controllers/users.controlleers"));
const usersRouter = (0, express_1.Router)();
usersRouter
    .get('/users', users_controlleers_1.default.GET)
    .post('/users', users_controlleers_1.default.POST)
    .put('/users/:id', users_controlleers_1.default.PUT)
    .delete('/users/:id', users_controlleers_1.default.DELETE);
exports.default = usersRouter;
