import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodo, useTodoBody, useTodoId, useEditTodo } from "../../todo_modules/TodoContext";

import { TextField, Button, useMediaQuery } from "@material-ui/core";

import useStyles from "../useStyles";

const AddCategory = ({ setIsAddTodo }) => {
    const mobile = useMediaQuery("(max-width:600px)");

    const [todoBody, setTodoBody] = useTodoBody();
    const [todos, setTodos] = useTodo();
    const [todoId, setTodoId] = useTodoId();
    const [editTodoId, setEditTodoId] = useEditTodo();

    useEffect(() => {
        document.getElementById("add-todos-cat").focus();
    });

    const getDateTime = () => {
        const d = new Date();
        const date =
            d.getDate() % 10 === 1
                ? `${d.getDate()}st`
                : d.getDate() % 10 === 2
                ? `${d.getDate()}nd`
                : d.getDate() % 10 === 3
                ? `${d.getDate()}rd`
                : `${d.getDate()}th`;

        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const month = [months[d.getMonth() - 1]];

        const min = d.getMinutes() < 10 ? `0${d.getMinutes(0)}` : d.getMinutes();
        const h = d.getHours() === 0 ? 12 : d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
        const hour = h < 10 ? `0${h}` : h;
        const postFix = d.getHours() === 0 ? " am" : d.getHours() >= 12 ? " pm" : " am";
        const time = hour + " : " + min + postFix;

        const dateTime = date + " " + month + " | " + time;

        return dateTime;
    };

    const addTodo = e => {
        e.preventDefault();

        if (todoBody === "") return;

        const dateTime = getDateTime();

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
        <div style={modalShadowStyle}>
            <div style={modalStyle}>
                <h1 style={modalHeadingStyle}>Add A Todo</h1>
                <hr style={{ margin: "1rem 0" }} />
                <form onSubmit={addTodo}>
                    <TextField
                        value={todoBody}
                        onChange={e => setTodoBody(e.target.value)}
                        id="add-todos-cat"
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
            </div>
        </div>
    );
};

export default AddCategory;
