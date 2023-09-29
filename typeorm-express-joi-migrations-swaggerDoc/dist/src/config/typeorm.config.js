"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrm = void 0;
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
exports.typeOrm = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aliev2002',
    database: 'n124',
    synchronize: true,
    entities: [path_1.default.join(process.cwd(), 'src', 'entities', '*.entity.{ts, js}')]
});
