import express from "express";

import db from "../db";

export const moveOpportunity = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const opportunityId = id ? parseInt(id) : 0;
  const { stage, position } = req.body;

  try {
    const targetOpps = await db.opportunity.findMany({
      where: {
        stageId: parseInt(stage, 10),
        NOT: {
          id: opportunityId,
        },
      },
      orderBy: {
        position: "asc",
      },
    });

    let newPos = parseInt(position, 10);

    if (newPos <= 0) {
      if (targetOpps.length > 0) {
        newPos = targetOpps[0].position - 1;
      }
    } else if (newPos >= targetOpps.length) {
      newPos = targetOpps[targetOpps.length - 1].position + 1;
    } else {
      newPos =
        (targetOpps[newPos].position + targetOpps[newPos - 1].position) / 2;
    }

    const opportunity = await db.opportunity.update({
      where: {
        id: opportunityId,
      },
      data: {
        stageId: parseInt(stage, 10),
        position: newPos,
      },
    });

    return res.status(200).json({ opportunity });
  } catch (error) {
    return res.status(400).json({ error, data: { id, stage, position } });
  }
};
