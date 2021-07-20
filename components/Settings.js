import React from "react";
import { useRouter } from "next/router";
import { useTodo, useTodoId } from "../todo_modules/TodoContext";

import { useMediaQuery, Button, ButtonGroup, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Settings = ({ setIsSettings }) => {
    const mobile = useMediaQuery("(max-width:600px)");
    const router = useRouter();
    const [todos, setTodos] = useTodo();
    const [todoId, setTodoId] = useTodoId();

    const backHandler = () => {
        setIsSettings(prevState => !prevState);
        router.push("/");
    };

    const deleteHandler = () => {
        const filtered = todos.filter(todo => todo.id !== todoId);

        setTodos(filtered);
        localStorage.setItem("my-todos", JSON.stringify(filtered));

        setIsSettings(prevState => !prevState);
        router.replace("/");
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
                    width: mobile ? "60%" : "20rem",
                    marginLeft: "auto",
                    marginRight: "10%",
                    background: "#0067E0",
                    padding: "1rem",
                    borderRadius: "10px",
                    boxShadow: "0 0 25px rgba(0,0,0,0.25)",
                }}>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "1rem",
                    }}>
                    <IconButton
                        onClick={() => setIsSettings(prevState => !prevState)}
                        style={{
                            background: "white",
                            boxShadow: "0 0 15px rgba(0,0,0,0.25)",
                            width: "1rem",
                            height: "1rem",
                        }}>
                        <CloseIcon style={{ color: "#0067E0", fontSize: "0.7rem" }} />
                    </IconButton>
                </div>
                <ButtonGroup orientation="vertical" variant="contained" fullWidth={true}>
                    <Button
                        onClick={backHandler}
                        style={{
                            background: "white",
                            color: "#0067E0",
                            textTransform: "initial",
                            fontFamily: '"Lobster Two", cursive',
                            fontSize: "1rem",
                        }}>
                        Back
                    </Button>
                    <Button
                        onClick={deleteHandler}
                        style={{
                            background: "white",
                            color: "#0067E0",
                            textTransform: "initial",
                            fontFamily: '"Lobster Two", cursive',
                            fontSize: "1rem",
                        }}>
                        Delete Category
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Settings;
