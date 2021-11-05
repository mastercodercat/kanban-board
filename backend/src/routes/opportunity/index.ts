import express from "express";

import { moveOpportunity } from "../../controllers/opportunity";
import { opportunityRules } from "../../utils/validationRules";
import { validate } from "../../middlewares/validation";

const routes = express.Router();

routes.patch("/:id", opportunityRules(), validate, moveOpportunity);

export default routes;
