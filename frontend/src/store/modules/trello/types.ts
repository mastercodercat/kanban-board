export interface Credentials {
  email: string;
}

export interface Colleague {
  name: string;
}

export interface Opportunity {
  id: number;
  name: string;
  position: number;
  stageId: number;
}

export interface Stage {
  id: number;
  name: string;
  position: number;
  workspaceId: number;
  opportunities: Opportunity[];
}

export interface WorkSpace {
  id: number;
  name: string;
  users: Colleague[];
  stages: Stage[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  workspace: WorkSpace;
}

export interface TrelloState {
  user: Partial<User>;
  workspace: WorkSpace;
  loading: boolean;
}

export interface TrelloResult {
  user: User;
  token: string;
}

export interface CardPosition {
  id: number;
  stage: number;
  position: number;
}

export interface StagePosition {
  id: number;
  position: number;
}
