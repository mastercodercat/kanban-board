import express from "express";

import db from "../db";

export const signIn = async (req: express.Request, res: express.Response) => {
  const { email } = req.body;

  try {
    const user = await db.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
      include: {
        workspace: {
          include: {
            stages: {
              include: {
                opportunities: {
                  orderBy: {
                    position: "asc",
                  },
                },
              },
              orderBy: [
                {
                  position: "asc",
                },
              ],
            },
            users: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Incorrect Credentials" });
    }

    return res.send({
      user,
    });
  } catch (error) {
    return res.status(401).json({ error: "Incorrect Credentials" });
  }
};
