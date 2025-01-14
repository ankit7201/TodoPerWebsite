import React, { useState } from "react";
import { Todo } from "../types/Todo";
import { v4 as uuidv4 } from "uuid";

interface TodoInputProps {
  addTodo: (newTodo: Todo) => void;
}

export const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            className="block w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Add Todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            onClick={(e: React.FormEvent) => {
              e.preventDefault();
              addTodo({
                id: uuidv4(),
                value: inputValue,
              });
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
