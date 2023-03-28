import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { studentRoute } from "./routes/student.route";
const bodyParser = require('body-parser')
const swaggerJsdoc = require("swagger-jsdoc")
const  swaggerUi = require("swagger-ui-express");
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.use("/students", studentRoute());
const  swaggerOptions = {
    definition: {
      openapi: "3.0.1",
      info: {
        title: "REST API for Swagger Documentation",
        version: "1.0.0",
      },
      schemes: ["http", "https"],
      servers: [{ url: "http://localhost:3000/" }],
    },
    apis: [
      `${__dirname}/routes/student.route.ts`,
      "./dist/routes/student.route.js",
    ],
  };
const specs = swaggerJsdoc(swaggerOptions);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
app.listen(port, () => console.log(`app listing on http://localhost:${port}`));

