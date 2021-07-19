import React from "react";
import Category from "./Category";

import { useTodo } from "../../todo_modules/TodoContext";

const Categories = () => {
    const [todos, setTodos] = useTodo();

    return (
        <div style={{ margin: "2rem 0" }}>
            {todos.map(todo => (
                <Category key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default Categories;
