"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
const Userrouter = express_1.default.Router();
Userrouter
    .post('/users', users_controllers_1.default.post)
    .get('/users', users_controllers_1.default.get)
    .put('/users/:id', users_controllers_1.default.put)
    .delete('/users/:id', users_controllers_1.default.delete);
exports.default = Userrouter;
