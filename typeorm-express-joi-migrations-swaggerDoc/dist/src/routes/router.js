"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_routes_1 = __importDefault(require("./players/players.routes"));
const clubs_routes_1 = __importDefault(require("./clubs/clubs.routes"));
const mainRouter = (0, express_1.Router)();
exports.default = mainRouter.use([
    players_routes_1.default,
    clubs_routes_1.default
]);
