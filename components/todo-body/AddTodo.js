import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodo, useTodoBody, useTodoId, useEditTodo } from "../../modules/TodoContext";

import { TextField, Button } from "@material-ui/core";

import useStyles from "../../modules/useStyles";
import useDateTime from "../../modules/useDateTime";

import { motion } from "framer-motion";
import { pageAnimation, cardAnimation } from "../../animations/Animations";

const AddCategory = ({ setIsAddTodo }) => {
    const [todoBody, setTodoBody] = useTodoBody();
    const [todos, setTodos] = useTodo();
    const [todoId, setTodoId] = useTodoId();
    const [editTodoId, setEditTodoId] = useEditTodo();

    useEffect(() => {
        document.getElementById("add-todos-cat").focus();
    });

    const dateTime = useDateTime();
    const addTodo = e => {
        e.preventDefault();

        if (todoBody === "") return;

        let matched = [];
        matched = todos.filter(todo => todo.id === todoId)[0];
        let filtered = todos.filter(todo => todo.id !== todoId);

        if (editTodoId === "") {
            matched = {
                ...matched,
                dateTime,
                todos: [{ id: uuidv4(), dateTime, body: todoBody }, ...matched.todos],
            };
        } else {
            let matchedTodo = matched.todos.filter(todo => todo.id === editTodoId)[0];
            let filteredTodo = matched.todos.filter(todo => todo.id !== editTodoId);

            matchedTodo = { ...matchedTodo, dateTime, body: todoBody };

            let tdBdy = [matchedTodo, ...filteredTodo];

            matched = { ...matched, dateTime, todos: tdBdy };

            setEditTodoId("");
        }

        setTodos([matched, ...filtered]);
        localStorage.setItem("my-todos", JSON.stringify([matched, ...filtered]));

        setTodoBody("");
        setIsAddTodo(prevState => !prevState);
    };

    const cancelHandler = () => {
        setEditTodoId("");
        setTodoBody("");
        setIsAddTodo(prevState => !prevState);
    };

    const {
        modalShadowStyle,
        modalStyle,
        modalHeadingStyle,
        modalTextFieldStyle,
        modalButtonContainerStyle,
        buttonStyle,
    } = useStyles();

    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={modalShadowStyle}>
            <motion.div variants={cardAnimation} style={modalStyle}>
                <h1 style={modalHeadingStyle}>Add A Todo</h1>
                <hr style={{ margin: "1rem 0" }} />
                <form onSubmit={addTodo}>
                    <TextField
                        value={todoBody}
                        onChange={e => setTodoBody(e.target.value)}
                        id="add-todos-cat"
                        multiline
                        autoComplete="off"
                        style={modalTextFieldStyle}
                    />
                    <div style={modalButtonContainerStyle}>
                        <Button
                            onClick={addTodo}
                            variant="contained"
                            style={{ ...buttonStyle, marginRight: "1rem" }}>
                            Add
                        </Button>
                        <Button onClick={cancelHandler} variant="contained" style={buttonStyle}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default AddCategory;
