import express, { Express, Response, Request } from 'express';
import dotenv from 'dotenv';
const app: Express = express();
dotenv.config();

const { EXPRESS_PORT } = process.env;

app.use(express.static('/public'));

app.all('*', (req: Request, res: Response) => { return res.status(404).json({ "status": 404 }); });

app.listen(EXPRESS_PORT, () => { console.log(`Started on port: ${EXPRESS_PORT}`); });