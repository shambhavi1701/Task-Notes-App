import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTask(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEdit(index) {
    const editedValue = todos[index];
    setTodoValue(editedValue);
    handleDelete(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <Header />
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTask={handleAddTask}
      />
      <ToDoList
        handleDelete={handleDelete}
        todos={todos}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
