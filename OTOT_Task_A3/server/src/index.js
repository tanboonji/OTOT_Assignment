import express from 'express';
import serverRouter from './routes/ServerRouter.js';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/server/', serverRouter);

app.listen(PORT, () => {
    console.log(`Started server api service on port: ${PORT}`);
});
