"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const heroRouter = require('./router/heroRouter');
const PORT = 4000;
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use(heroRouter);
server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
