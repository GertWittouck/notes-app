import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { Todos, Todo } from "@/models/models";
import { TodosApi } from "@/api/api";

@Module({
  name: "TodosStore",
  namespaced: true,
  stateFactory: true
})
export default class TodosStore extends VuexModule {
  todos: Todos = { todos: [] };

  @Mutation
  setAll(todos: Array<Todo>) {
    console.log("setAll", todos);
    this.todos.todos = todos;
  }

  @Action({ commit: "setAll" })
  public updateTodos(todos: Array<Todo>) {
    return todos;
  }
}
