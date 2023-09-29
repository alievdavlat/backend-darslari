"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongo = async () => {
    try {
        return await mongoose_1.default
            .connect("mongodb://127.0.0.1:27017/n124")
            .catch((error) => console.log(error));
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = mongo;
