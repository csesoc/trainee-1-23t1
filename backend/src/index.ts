import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './config';

const app: Express = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Sus');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
