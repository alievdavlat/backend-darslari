"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_controllers_1 = __importDefault(require("../../controllers/players.controllers"));
const PlayerRouters = (0, express_1.Router)();
PlayerRouters
    .get('/players', players_controllers_1.default.GET)
    .post('/players', players_controllers_1.default.POST);
exports.default = PlayerRouters;
