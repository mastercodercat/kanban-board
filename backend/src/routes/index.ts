import express from "express";

import authRoutes from "./auth";
import workspaceRoutes from "./workspace";
import stageRoutes from "./stage";
import opportunityRoutes from "./opportunity";

const routes = express.Router();

routes.use("/auth", authRoutes);
routes.use("/workspaces", workspaceRoutes);
routes.use("/stages", stageRoutes);
routes.use("/opportunities", opportunityRoutes);

export default routes;
