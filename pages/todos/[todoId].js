import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTodo, useTodoId } from "../../todo_modules/TodoContext";

import TopBar from "../../components/TopBar";
import TodoBody from "../../components/todo-body/TodoBody";

const TodoList = () => {
    const router = useRouter();
    const { todoId } = router.query;

    const [foundTodos, setFoundTodos] = useState([]);
    const [todos, setTodos] = useTodo();
    const [tId, setTodoId] = useTodoId();

    useEffect(() => {
        const filtered = todos.filter(todo => todo.id === todoId);
        if (todos.length > 0) setFoundTodos(filtered[0]);
        setTodoId(todoId);
    });

    return (
        <>
            {foundTodos && (
                <div>
                    <TopBar heading={foundTodos.todoCat} />
                    <div style={{ margin: "2rem 0" }}>
                        {foundTodos.todos &&
                            foundTodos.todos.map(todo => (
                                <TodoBody
                                    todo={todo}
                                    id={foundTodos.id}
                                    dateTime={foundTodos.dateTime}
                                    key={todo.id}
                                />
                            ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoList;
