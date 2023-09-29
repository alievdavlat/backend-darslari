"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_config_1 = require("./config/typeorm.config");
const errorHandler_middleware_1 = require("./errors/errorHandler.middleware");
const router_1 = __importDefault(require("./routes/router"));
require("dotenv/config");
const errorHandler_1 = require("./utils/errorHandler");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
typeorm_config_1.typeOrm
    .initialize()
    .then(() => console.log('db connected'))
    .catch(err => new errorHandler_1.ErrorHandler(err.message, 503));
app.use(express_1.default.json());
app.use(router_1.default);
app.use(errorHandler_middleware_1.errorHandlerMiddleware);
app.use('/*', (_, res) => res.status(404).json(`<h1>иди нахер 😁</h1> </br> ---- <h2> Или пожалуйста иди нахуй 😎</h2> `));
app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
