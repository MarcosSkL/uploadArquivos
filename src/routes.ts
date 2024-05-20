import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();

routes.post("/posts", multer(multerConfig).single('file'), (req: express.Request, res: express.Response) => {
    console.log(req.file);
    
    return res.json({ hello: "SKL Software" });
});

export default routes;