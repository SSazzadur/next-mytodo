import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTodo, useTodoId } from "../../modules/TodoContext";

import { useMediaQuery } from "@material-ui/core";
import TopBar from "../../components/TopBar";
import TodoBody from "../../components/todo-body/TodoBody";
import Meta from "../../components/layout/Meta";

import { motion } from "framer-motion";
import { pageAnimation } from "../../animations/Animations";

const TodoList = () => {
    const router = useRouter();
    const { todoId } = router.query;

    const [foundTodos, setFoundTodos] = useState([]);
    const [todos, setTodos] = useTodo();
    const [tId, setTodoId] = useTodoId();

    const mobile = useMediaQuery("(max-width:600px)");

    useEffect(() => {
        const filtered = todos.filter(todo => todo.id === todoId);
        if (todos.length > 0) setFoundTodos(filtered[0]);
        setTodoId(todoId);
    });

    return (
        <>
            {foundTodos && (
                <>
                    <Meta title={`${foundTodos.todoCat} | My Todo`} />
                    <div>
                        <TopBar heading={foundTodos.todoCat} />
                        <div style={{ margin: "2rem 0" }}>
                            <motion.div
                                variants={pageAnimation}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            >
                                {foundTodos.todos &&
                                    foundTodos.todos.map(todo => (
                                        <TodoBody
                                            todo={todo}
                                            id={todoId}
                                            dateTime={foundTodos.dateTime}
                                            key={todo.id}
                                        />
                                    ))}
                            </motion.div>

                            {foundTodos.todos && foundTodos.todos.length === 0 && (
                                <div
                                    style={{
                                        margin: "0 auto",
                                        display: "grid",
                                        placeContent: "center",
                                        width: mobile ? "80%" : "30rem",
                                        height: "80vh",
                                    }}
                                >
                                    <Image
                                        src="/images/empty-list.svg"
                                        alt="empty-screen"
                                        width="750px"
                                        height="750px"
                                    ></Image>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default TodoList;
