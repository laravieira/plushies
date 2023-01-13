import express from 'express';
import cors from 'cors';
import routes from './Routes/root.route';
import * as dotenv from 'dotenv';
import Indexer from './Indexer/Indexer.indexer';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors(process.env.ORIGIN ? { origin: process.env.ORIGIN } : {}));
app.use(routes);

Indexer.execute();

app.listen(process.env.PORT || 4000);

console.log(`Service available on port ${process.env.PORT || 4000}`);
