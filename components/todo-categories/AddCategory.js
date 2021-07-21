import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodo } from "../../modules/TodoContext";

import { TextField, Button } from "@material-ui/core";
import useStyles from "../../modules/useStyles";
import useDateTime from "../../modules/useDateTime";

const AddCategory = ({ setIsAddCat }) => {
    const [todoCat, setTodoCat] = useState("");
    const [todo, setTodo] = useTodo();

    useEffect(() => {
        document.getElementById("add-todo-cat").focus();
    });

    const dateTime = useDateTime();
    const addTodo = e => {
        e.preventDefault();

        if (todoCat === "") return;

        setTodo(prevTodo => [
            {
                dateTime,
                id: uuidv4(),
                todoCat,
                todos: [],
            },
            ...prevTodo,
        ]);

        localStorage.setItem(
            "my-todos",
            JSON.stringify([{ dateTime, id: uuidv4(), todoCat, todos: [] }, ...todo])
        );
        setTodoCat("");
        setIsAddCat(prevState => !prevState);
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
                <h1 style={modalHeadingStyle}>Add A Todo Category</h1>
                <hr style={{ margin: "1rem 0" }} />
                <form onSubmit={addTodo}>
                    <TextField
                        value={todoCat}
                        onChange={e => setTodoCat(e.target.value)}
                        id="add-todo-cat"
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
                        <Button
                            onClick={() => setIsAddCat(prevState => !prevState)}
                            variant="contained"
                            style={buttonStyle}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
