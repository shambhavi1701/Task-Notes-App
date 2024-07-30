import React, { useState } from "react";

export default function ToDoInput(props) {
  const { handleAddTask, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter the Tasks to do..."
      />
      <button
        onClick={() => {
          handleAddTask(todoValue);
          setTodoValue("");
        }}
      >
        Submit
      </button>
    </header>
  );
}
