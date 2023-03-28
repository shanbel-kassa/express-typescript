import express, { Express} from "express";
import dotenv from "dotenv";
import { studentRoute } from "./routes/student.route";
import  bodyParser  from 'body-parser'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.use("/students", studentRoute());

app.listen(port, () => console.log(`app listing on http://localhost:${port}`));

