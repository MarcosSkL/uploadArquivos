"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
const PostController_1 = require("./controller/PostController");
const postController = new PostController_1.PostController;
const upload = (0, multer_1.default)(multer_2.default);
const routes = express_1.default.Router();
routes.post("/posts", (0, multer_1.default)(multer_2.default).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({ hello: "SKL Software" });
});
routes.post("/", upload.array('images'), postController.store);
routes.get("/", (req, res) => {
    return res.json({
        hello: "Servidor Funcionando",
    });
});
exports.default = routes;
