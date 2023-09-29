"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
exports.default = {
    REGISTER: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { username, password } = req.body;
        try {
            const user = yield model_1.User.create({ username, password });
            res.status(201).json({ message: 'Ro\'yxatdan o\'tdingiz', user });
        }
        catch (error) {
            res.status(500).json({ error: 'Ro\'yxatdan o\'tishda xatolik yuz berdi' });
        }
    }),
    LOGIN: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { username, password } = req.body;
        try {
            const user = yield model_1.User.findOne({ where: { username } });
            if (!user) {
                return res.status(401).json({ error: 'Foydalanuvchi topilmadi' });
            }
            if (user.password !== password) {
                return res.status(401).json({ error: 'Noto\'g\'ri parol' });
            }
            res.status(200).json({ message: 'Tizimga kirdingiz', user });
        }
        catch (error) {
            res.status(500).json({ error: 'Kirishda xatolik yuz berdi' });
        }
    })
};
