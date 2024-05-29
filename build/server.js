"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "..", "uploads", "img")));
app.use("/application ", express_1.default.static(path_1.default.join(__dirname, "..", "uploads", "pdf")));
app.use(routes_1.default);
app.listen(PORT, () => console.log("listenig on port " + PORT));
