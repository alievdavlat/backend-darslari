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
    GET: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const comment = yield model_1.Comment.findByPk(id);
            if (!comment) {
                return res.status(404).json({ error: 'Komment topilmadi' });
            }
            res.status(200).json(comment);
        }
        catch (error) {
            res.status(500).json({ error: 'Kommentni olishda xatolik yuz berdi' });
        }
    }),
    POST: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { content, user_id, msg } = req.body;
        try {
            const comment = yield model_1.Comment.create({ content, user_id, msg });
            res.status(201).json({ message: 'Kommentariya qo\'shildi', comment });
        }
        catch (error) {
            res.status(500).json({ error: 'Kommentariya qo\'shishda xatolik yuz berdi' });
        }
    }),
    PUT: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { content, user_id, msg } = req.body;
        try {
            const comment = yield model_1.Comment.findByPk(id);
            if (!comment) {
                return res.status(404).json({ error: 'Komment topilmadi' });
            }
            comment.content = content;
            comment.user_id = user_id;
            comment.msg = msg;
            yield comment.save();
            res.status(200).json({ message: 'Komment yangilandi', comment });
        }
        catch (error) {
            res.status(500).json({ error: 'Kommentni yangilashda xatolik yuz berdi' });
        }
    })
};
