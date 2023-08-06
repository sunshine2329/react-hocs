import React from "react";

type TodoItemProps = {
  todo: string;
  onComplete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete }) => {
  return (
    <li>
      {todo}
      <button onClick={onComplete}>Complete</button>
    </li>
  );
};

export default TodoItem;
