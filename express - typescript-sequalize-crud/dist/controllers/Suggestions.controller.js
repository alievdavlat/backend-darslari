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
    GET: (_, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const suggestions = yield model_1.Suggestion.findAll();
            res.status(200).json(suggestions);
        }
        catch (error) {
            res
                .status(500)
                .json({ error: "Ma'lumotlarni olishda xatolik yuz berdi" });
        }
    }),
    GET_BY_ID: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const suggestion = yield model_1.Suggestion.findByPk(id);
            if (!suggestion) {
                return res.status(404).json({ error: 'Taklif topilmadi' });
            }
            res.status(200).json(suggestion);
        }
        catch (error) {
            res.status(500).json({ error: 'Ma\'lumotlarni olishda xatolik yuz berdi' });
        }
    }),
    POST: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description, status } = req.body;
            const suggestion = yield model_1.Suggestion.create({ title, description, status });
            res.status(201).json({ message: 'Taklif qo\'shildi', suggestion });
        }
        catch (error) {
            res.status(500).json({ error: 'Taklif qo\'shishda xatolik yuz berdi' });
        }
    }),
    PUT: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { title, description, status } = req.body;
        try {
            const suggestion = yield model_1.Suggestion.findByPk(id);
            if (!suggestion) {
                return res.status(404).json({ error: 'user topilmadi' });
            }
            suggestion.title = title;
            suggestion.description = description;
            suggestion.status = status;
            yield suggestion.save();
            res.status(200).json({ message: 'Taklif yangilandi', suggestion });
        }
        catch (error) {
            res.status(500).json({ error: 'Taklifni yangilashda xatolik yuz berdi' });
        }
    }),
    DELETE: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const suggestion = yield model_1.Suggestion.findByPk(id);
            if (!suggestion) {
                return res.status(404).json({ error: 'user topilmadi' });
            }
            yield suggestion.destroy();
            res.status(204).end();
        }
        catch (error) {
            res.status(500).json({ error: 'userni o\'chirishda xatolik yuz berdi' });
        }
    })
};
