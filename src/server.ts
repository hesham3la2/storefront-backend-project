import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import router from './routes/index';

const app: express.Application = express();
const address: string = 'localhost:3000';

app.use(bodyParser.json());

app.use(router);

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
