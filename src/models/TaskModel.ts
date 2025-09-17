import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDade: number;
  completeDate: number | null;
  interrruptDate: number | null;
  type: keyof TaskStateModel['config'];
};