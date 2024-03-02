import express from 'express';
import { getConnection } from './db/mongodb_connection.js';
import cors from 'cors';
import router from './routes/index.js';

const app = express();

const port = 4001;

app.use(cors());

getConnection();

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`App en http://localhost:${port}`);
});