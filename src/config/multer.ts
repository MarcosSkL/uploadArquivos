import multer, { Options } from 'multer';
import path from 'path';
import crypto from 'crypto';

const multerConfig: Options = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            let dir;
            if (file.mimetype.startsWith('image/')) {
                dir = path.resolve(__dirname, "..", "..", "tmp", "uploads", "img");
            } else if (file.mimetype === 'application/pdf') {
                dir = path.resolve(__dirname, "..", "..", "tmp", "uploads", "pdf");
            } else {
                cb(new Error("invalid file type."), '');
                return;
            }

            cb(null, dir);
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, '');

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            });
        },
    }),
    limits: {
        fileSize: 4 * 1024 * 1024,
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
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
};

export default multerConfig;