import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import { PostController } from './controller/PostController';

const postController = new PostController;

const upload = multer(multerConfig);

const routes = express.Router();

routes.post("/posts", multer(multerConfig).single('file'), (req: express.Request, res: express.Response) => {
    console.log(req.file);

    return res.json({ hello: "SKL Software" });
});

routes.post("/", upload.array('images'), postController.store);

routes.get("/", (req, res) => {
    return res.json({
        hello:"Servidor Funcionando",
    });
});

export default routes;