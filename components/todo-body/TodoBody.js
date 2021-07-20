import React from "react";

import { useMediaQuery, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useTodo, useTodoBody, useAddTodo, useEditTodo } from "../../todo_modules/TodoContext";

const TodoBody = ({ todo, id }) => {
    const mobile = useMediaQuery("(max-width:600px)");

    const [todos, setTodos] = useTodo();
    const [todoBody, setTodoBody] = useTodoBody();
    const [isAddTodo, setIsAddTodo] = useAddTodo();
    const [editTodoId, setEditTodoId] = useEditTodo();

    const editHandler = () => {
        setTodoBody(todo.body);
        setIsAddTodo(prevState => !prevState);
        setEditTodoId(todo.id);
    };

    const deleteHandler = () => {
        let matched = todos.filter(todo => todo.id === id)[0];
        const filtered = todos.filter(todo => todo.id !== id);
        // setTodos(matched);

        const filteredTodo = matched.todos.filter(td => td.id !== todo.id);

        matched = {
            ...matched,
            dateTime: getDateTime(),
            todos: filteredTodo,
        };

        setTodos([matched, ...filtered]);

        localStorage.setItem("my-todos", JSON.stringify([matched, ...filtered]));
    };
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

    return (
        <div
            style={{
                width: mobile ? "90%" : "40rem",
                margin: "1rem auto",
                background: "#0067E0",
                borderRadius: "10px",
                color: "white",
                padding: "1rem 0.5rem 0.5rem",
            }}>
            <h2 style={{ textAlign: "center" }}>{todo.body}</h2>
            <hr style={{ margin: "1rem 0 0.4rem" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{ display: "flex", flexDirection: "column", fontSize: "0.6rem" }}>
                    Added <span style={{ fontSize: "0.8rem" }}>{todo.dateTime}</span>
                </p>
                <div style={{ justifySelf: "flex-end" }}>
                    <IconButton
                        onClick={editHandler}
                        variant="contained"
                        style={{
                            background: "white",
                            color: "#0067E0",
                            textTransform: "initial",
                            fontFamily: '"Lobster Two", cursive',
                            marginRight: "0.3rem",
                        }}>
                        <EditIcon style={{ fontSize: "0.8rem" }} />
                    </IconButton>
                    <IconButton
                        onClick={deleteHandler}
                        variant="contained"
                        style={{
                            background: "white",
                            color: "#0067E0",
                            textTransform: "initial",
                            fontFamily: '"Lobster Two", cursive',
                        }}>
                        <DeleteIcon style={{ fontSize: "0.8rem" }} />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default TodoBody;
