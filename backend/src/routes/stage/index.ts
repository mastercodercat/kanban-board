import express from "express";

import { moveStage } from "../../controllers/stage";
import { stageRules } from "../../utils/validationRules";
import { validate } from "../../middlewares/validation";

const routes = express.Router();

routes.patch("/:id", stageRules(), validate, moveStage);

export default routes;
