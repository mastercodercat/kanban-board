import express from "express";

import { signIn } from "../../controllers/authentication";
import { signinRules } from "../../utils/validationRules";
import { validate } from "../../middlewares/validation";

const routes = express.Router();

routes.post("/signin", signinRules(), validate, signIn);

export default routes;
