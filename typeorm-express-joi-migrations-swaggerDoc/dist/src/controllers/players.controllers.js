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
const typeorm_config_1 = require("../config/typeorm.config");
const player_entity_1 = require("../entities/player.entity");
const errorHandler_1 = require("../utils/errorHandler");
const players_validaion_1 = require("../validations/players.validaion");
exports.default = {
    GET: (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const allPlayers = yield typeorm_config_1.typeOrm
            .getRepository(player_entity_1.Players)
            .find({
            relations: {
                club: true
            }
        })
            .catch(err => next(new errorHandler_1.ErrorHandler(err.message, 503)));
        if (allPlayers)
            res.status(201).json(allPlayers);
    }),
    POST: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { error, value } = players_validaion_1.PlayersValidation.validate(req.body);
        if (error)
            next(new errorHandler_1.ErrorHandler(error.message, 400));
        const { name } = value;
        const newUser = yield typeorm_config_1.typeOrm
            .createQueryBuilder().insert().into(player_entity_1.Players).values({
            name
        }).returning(['id', 'name']).execute().catch(err => next(new errorHandler_1.ErrorHandler(err.message, 503)));
        if (newUser)
            res.status(201).json(newUser);
    }),
};
