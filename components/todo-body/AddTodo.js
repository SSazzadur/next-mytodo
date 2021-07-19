import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodo, useTodoBody, useTodoId, useEditTodo } from "../../todo_modules/TodoContext";

import { TextField, Button, useMediaQuery } from "@material-ui/core";

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
                : d.getDate() === 2
                ? `${d.getDate()}nd`
                : d.getDate() === 3
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
        const postFix = d.getHours() === 0 ? " am" : d.getHours() > 12 ? " pm" : " am";
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

    return (
        <div
            style={{
                position: "fixed",
                inset: "0",
                background: "rgba(0, 103, 224, 0.3)",
                backdropFilter: "blur(2px)",
                paddingTop: "3rem",
                zIndex: "999",
            }}>
            <div
                style={{
                    width: mobile ? "90%" : "40rem",
                    margin: "0 auto",
                    background: "#0067E0",
                    padding: "1rem",
                    borderRadius: "10px",
                    boxShadow: "0 0 25px rgba(0,0,0,0.25)",
                }}>
                <h1 style={{ textAlign: "center", color: "white" }}>Add A Todo</h1>
                <hr style={{ margin: "1rem 0" }} />
                <form onSubmit={addTodo}>
                    <TextField
                        value={todoBody}
                        onChange={e => setTodoBody(e.target.value)}
                        id="add-todos-cat"
                        style={{
                            width: "90%",
                            margin: "0 5%",
                            background: "white",
                            borderRadius: "10px",
                            padding: "1rem 0.5rem",
                        }}
                    />
                    <div
                        style={{
                            width: "90%",
                            margin: "0 auto",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "1rem",
                            paddingTop: "1rem",
                        }}>
                        <Button
                            onClick={addTodo}
                            variant="contained"
                            style={{
                                background: "white",
                                color: "#0067E0",
                                textTransform: "initial",
                                fontFamily: '"Lobster Two", cursive',
                            }}>
                            Add
                        </Button>
                        <Button
                            onClick={cancelHandler}
                            variant="contained"
                            style={{
                                background: "white",
                                color: "#0067E0",
                                textTransform: "initial",
                                fontFamily: '"Lobster Two", cursive',
                            }}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
