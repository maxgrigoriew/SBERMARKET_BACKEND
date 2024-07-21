import express from 'express';
import { sequelize } from './db.js';
import models from './models/models.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import routes from './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';
import path from 'path';
import { fileURLToPath } from 'url';
import './env.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'static')));

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', routes);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));
    } catch (e) {
        console.log(e);
    }
};

start();
