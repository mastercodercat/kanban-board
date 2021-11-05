import express from "express";

import db from "../db";

export const moveStage = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const stageId = id ? parseInt(id) : 0;
  const { position, workspaceId } = req.body;

  try {
    const allStages = await db.stage.findMany({
      where: {
        workspaceId,
        NOT: {
          id: stageId,
        },
      },
      orderBy: {
        position: "asc",
      },
    });

    let newPos = parseFloat(position);
    if (newPos <= 0) {
      newPos = allStages[0].position - 1;
    } else if (newPos >= allStages.length) {
      newPos = allStages[allStages.length - 1].position + 1;
    } else {
      newPos =
        (allStages[newPos].position + allStages[newPos - 1].position) / 2;
    }

    const stage = await db.stage.update({
      where: {
        id: stageId,
      },
      data: {
        position: newPos,
      },
    });

    return res.status(200).json({ stage });
  } catch (error) {
    return res.status(400).json({ error, data: { stageId, position } });
  }
};
