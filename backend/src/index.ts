import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import config from "./config";
import routes from "./routes";

import morgan from "./middlewares/morgan";

import Logger from "./utils/logger";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use(morgan);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Successfully connected to api server." });
});

app.use("/api", routes);

const server = app.listen(config.appPort, () => {
  Logger.debug(`Server is up and running @ http://localhost:${config.appPort}`);
});

export default server;
