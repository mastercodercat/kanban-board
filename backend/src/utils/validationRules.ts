import { body } from "express-validator";

export const signinRules = () => {
  return [body("email").isEmail()];
};

export const stageRules = () => {
  return [body("position").isFloat()];
};

export const opportunityRules = () => {
  return [body("position").isFloat(), body("stage").isInt()];
};
