"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const multerConfig = {
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            let dir;
            if (file.mimetype.startsWith('image/')) {
                dir = path_1.default.resolve(__dirname, "..", "..", "tmp", "uploads", "img");
            }
            else if (file.mimetype === 'application/pdf') {
                dir = path_1.default.resolve(__dirname, "..", "..", "tmp", "uploads", "pdf");
            }
            else {
                cb(new Error("invalid file type."), '');
                return;
            }
            cb(null, dir);
        },
        filename: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err, '');
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            });
        },
    }),
    limits: {
        fileSize: 8 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/jpg',
            'image/png',
            'image/webp',
            'image/gif',
            'application/pdf'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            return cb(null, true);
        }
        cb(null, false);
    },
};
exports.default = multerConfig;
