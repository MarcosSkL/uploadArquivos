import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use("/images", express.static(path.join(__dirname, "..", "uploads", "img")));
app.use("/application ", express.static(path.join(__dirname, "..", "uploads", "pdf")));

app.use(routes);

app.listen(3000);