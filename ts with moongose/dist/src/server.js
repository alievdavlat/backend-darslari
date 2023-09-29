"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middlewares/errorHandler");
const routes_1 = __importDefault(require("./routes/routes"));
const mongo_1 = __importDefault(require("./config/mongo"));
require("dotenv/config");
const PORT = process.env.PORT || 9000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(errorHandler_1.errohandle);
(0, mongo_1.default)()
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));
app.listen(PORT, () => {
    console.log(PORT);
});
