export type TodoType = {
  id: number;
  task: string;
  status: "active" | "completed";
};

export type TodoFilter = "active" | "completed" | "all";
