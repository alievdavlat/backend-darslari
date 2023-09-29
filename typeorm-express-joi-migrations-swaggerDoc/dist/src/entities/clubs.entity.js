"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clubs = void 0;
const typeorm_1 = require("typeorm");
const player_entity_1 = require("./player.entity");
let Clubs = class Clubs {
};
exports.Clubs = Clubs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Clubs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 64,
        nullable: false
    }),
    __metadata("design:type", String)
], Clubs.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => player_entity_1.Players, p),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Clubs.prototype, "players", void 0);
exports.Clubs = Clubs = __decorate([
    (0, typeorm_1.Entity)({
        name: "clubs"
    })
], Clubs);
