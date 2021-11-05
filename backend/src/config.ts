import dotenv from "dotenv";

dotenv.config();

export default {
  // application configurations
  appName: process.env.APP_NAME || "NextStage Kanban Board",
  appPort: process.env.APP_PORT || 3000,
};
