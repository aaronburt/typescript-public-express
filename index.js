"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const { EXPRESS_PORT } = process.env;
app.use(express_1.default.static(__dirname + '/public'));
app.all('*', (req, res) => { return res.status(404).json({ "status": 404 }); });
app.listen(EXPRESS_PORT, () => { console.log(`Started on port: ${EXPRESS_PORT}`); });
