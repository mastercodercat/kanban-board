import express from "express";

import db from "../db";

export const getWorkspace = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const workspaceId = id ? parseInt(id) : 0;

  try {
    const workspace = await db.workspace.findUnique({
      where: {
        id: workspaceId,
      },
    });

    return res.status(200).json({ workspace });
  } catch (error) {
    return res.status(400).json({ error: "Not found workspace." });
  }
};
