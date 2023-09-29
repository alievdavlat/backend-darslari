"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clubs_controllers_1 = __importDefault(require("../../controllers/clubs.controllers"));
const ClubsRouters = (0, express_1.Router)();
ClubsRouters
    .get('/clubs', clubs_controllers_1.default.GET)
    .post('/clubs', clubs_controllers_1.default.POST);
exports.default = ClubsRouters;
