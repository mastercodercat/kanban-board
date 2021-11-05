import express from "express";

import { getWorkspace } from "../../controllers/workspace";

const routes = express.Router();

routes.get("/:id", getWorkspace);

export default routes;
