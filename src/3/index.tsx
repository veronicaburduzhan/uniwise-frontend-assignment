import { useMemo, useState } from "react";
import "./index.scss";
import { TodoFilter, TodoType } from "./types";
import { data } from "./data";
import ActionBar from "./components/ActionBar";
import NewTodoInput from "./components/NewTodoInput";
import ListTodo from "./components/ListTodo";

const Task3 = () => {
  const [todos, setTodos] = useState<TodoType[]>(data);
  const [filter, setFilter] = useState<TodoFilter>("active");
  const [isTodoInputVisible, setIsTodoInputVisible] = useState<boolean>(false);

  const filteredTodos = useMemo(() => {
    if (filter === "all") return todos;
    return todos.filter((item) => item.status === filter);
  }, [todos, filter]);

  const filterTodos = (filterValue: TodoFilter) => setFilter(filterValue);

  const addNewTodo = (todoText: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length ? Math.max(...prev.map((t) => t.id)) + 1 : 1,
        task: todoText,
        status: "active",
      },
    ]);
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (
    id: number,
    updatedTask: string,
    updatedStatus: TodoType["status"]
  ) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, task: updatedTask, status: updatedStatus }
          : todo
      )
    );
  };

  return (
    <main id="task-3">
      <div className="main-container">
        <ActionBar
          filter={filter}
          filterTodos={filterTodos}
          onOpenAddTodo={() => setIsTodoInputVisible(true)}
        />
        <div className="todo-container">
          <NewTodoInput
            onAdd={addNewTodo}
            isVisible={isTodoInputVisible}
            setIsVisible={setIsTodoInputVisible}
          />
          <ListTodo
            items={filteredTodos}
            onDelete={removeTodo}
            onEdit={editTodo}
          />
        </div>
      </div>
    </main>
  );
};

export default Task3;
