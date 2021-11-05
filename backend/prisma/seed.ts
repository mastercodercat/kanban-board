import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const workspaces = await prisma.workspace.createMany({
    data: [
      {
        name: "NextStage",
      },
      {
        name: "Test",
      },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        workspaceId: 1,
        email: "roy@lee.com",
        name: "roy",
      },
      {
        workspaceId: 1,
        email: "test@test.com",
        name: "test",
      },
      {
        workspaceId: 2,
        email: "test2@test2.com",
        name: "test2",
      },
    ],
  });

  await prisma.stage.createMany({
    data: [
      {
        workspaceId: 1,
        name: "BackLogs",
        position: 1,
      },
      {
        workspaceId: 1,
        name: "In Progress",
        position: 2,
      },
      {
        workspaceId: 1,
        name: "Up on Dev",
        position: 3,
      },
      {
        workspaceId: 1,
        name: "Verified",
        position: 4,
      },
      {
        workspaceId: 1,
        name: "Release",
        position: 1,
      },
    ],
  });

  await prisma.opportunity.createMany({
    data: [
      {
        stageId: 1,
        name: "Create API endpoints of kanban board",
        position: 1,
      },
      {
        stageId: 1,
        name: "Create model structure of kanban board",
        position: 2,
      },
      {
        stageId: 1,
        name: "Create kanban board frontend",
        position: 3,
      },
      {
        stageId: 1,
        name: "Fix issues",
        position: 4,
      },
    ],
  });

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
