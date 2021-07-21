import React from "react";

import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useTodo, useTodoBody, useAddTodo, useEditTodo } from "../../modules/TodoContext";

import useStyles from "../../modules/useStyles";
import useDateTime from "../../modules/useDateTime";

const TodoBody = ({ todo, id }) => {
    const [todos, setTodos] = useTodo();
    const [todoBody, setTodoBody] = useTodoBody();
    const [isAddTodo, setIsAddTodo] = useAddTodo();
    const [editTodoId, setEditTodoId] = useEditTodo();

    const editHandler = () => {
        setTodoBody(todo.body);
        setIsAddTodo(prevState => !prevState);
        setEditTodoId(todo.id);
    };

    const dateTime = useDateTime();
    const deleteHandler = () => {
        let matched = todos.filter(todo => todo.id === id)[0];
        const filtered = todos.filter(todo => todo.id !== id);
        // setTodos(matched);

        const filteredTodo = matched.todos.filter(td => td.id !== todo.id);

        matched = {
            ...matched,
            dateTime: dateTime,
            todos: filteredTodo,
        };

        setTodos([matched, ...filtered]);

        localStorage.setItem("my-todos", JSON.stringify([matched, ...filtered]));
    };

    const { cardStyle, belowLineStyle, dateTimeStyle, iconButtonStyle } = useStyles();

    return (
        <div style={{ ...cardStyle, padding: "1rem 0.5rem 0.5rem" }}>
            <h2 style={{ textAlign: "center" }}>{todo.body}</h2>
            <hr style={{ margin: "1rem 0 0.4rem" }} />
            <div style={belowLineStyle}>
                <p style={{ ...dateTimeStyle, fontSize: "0.6rem" }}>
                    Added <span style={{ fontSize: "0.8rem" }}>{todo.dateTime}</span>
                </p>
                <div style={{ justifySelf: "flex-end" }}>
                    <IconButton
                        onClick={editHandler}
                        variant="contained"
                        style={{ ...iconButtonStyle, marginRight: "0.3rem" }}>
                        <EditIcon style={{ fontSize: "0.8rem" }} />
                    </IconButton>
                    <IconButton onClick={deleteHandler} variant="contained" style={iconButtonStyle}>
                        <DeleteIcon style={{ fontSize: "0.8rem" }} />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default TodoBody;
