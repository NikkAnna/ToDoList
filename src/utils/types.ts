export type TTodo = {
  value: string;
  status: boolean;
  id: number;
};

export type TContextTodo = {
  todos: TTodo[];
};
