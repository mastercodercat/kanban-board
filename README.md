# Kanban Board

This is to create a kanban board using react trello.

## Application Dependencies

### Backend

- Node.js
- Express.js
- Prisma

### Frontend

- React
- Reduxjs/toolkit
- TypeScript
- React Trello
- Axios

## How to run

### Run backend api

- Copy .env.example file in backend and rename it to .env
- Run `npm install`
- Create a database in postgresql and run `npx prisma db push`
- Make seed data using `npx prisma db seed`
- Run `npm run dev`

### Run frontend

- Copy .env.example file in frontend, rename it to .env and verify that server address is correct.
- Run `yarn install` or `npm install`
- Run `yarn start` or `npm start`
