import React, { ChangeEvent } from "react";

type TodoFormProps = {
  newTodo: string;
  setNewTodo: (value: string) => void;
  addTodo: () => void;
};

const TodoForm: React.FC<TodoFormProps> = ({
  newTodo,
  setNewTodo,
  addTodo,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
