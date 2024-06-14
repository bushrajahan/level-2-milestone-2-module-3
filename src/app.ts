import express, { Request, Response, Application } from 'express';
import cors from 'cors';
const app: Application = express();
// const port = 3000

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  // let b;

  const a = 20;
  res.send(a);
});
export default app;
// console.log(process.cwd())

//Eslint - code format,code quality check,find error

//prettier = code format
