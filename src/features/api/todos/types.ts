export interface ITodosDTO {
  limit: number;
  scip: number;
  todos: ITodosListDTO;
  total: number;
}
export interface ITodosListDTO {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
