export interface Todos {
  todos: Array<Todo>;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ServerError {
  code: string;
  description: string;
}
