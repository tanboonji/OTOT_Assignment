import express from 'express';
import clientRouter from './routes/ClientRouter.js';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/client/', clientRouter);

app.listen(PORT, () => {
    console.log(`Started client api service on port: ${PORT}`);
});
