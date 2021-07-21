import React from "react";
import { useRouter } from "next/router";
import { useTodo, useTodoId } from "../modules/TodoContext";

import { useMediaQuery, Button, ButtonGroup, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "../modules/useStyles";

import { motion } from "framer-motion";
import { pageAnimation, cardAnimation } from "../animations/Animations";

const Settings = ({ setIsSettings }) => {
    const mobile = useMediaQuery("(max-width:600px)");
    const router = useRouter();
    const [todos, setTodos] = useTodo();
    const [todoId, setTodoId] = useTodoId();

    const backHandler = () => {
        setIsSettings(prevState => !prevState);
        router.replace("/");
    };

    const deleteHandler = () => {
        const filtered = todos.filter(todo => todo.id !== todoId);

        setTodos(filtered);
        localStorage.setItem("my-todos", JSON.stringify(filtered));

        setIsSettings(prevState => !prevState);
        router.replace("/");
    };

    const { modalShadowStyle, settingsModalStyle, settingsModalCloseStyle, buttonStyle } =
        useStyles();

    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={modalShadowStyle}>
            <motion.div variants={cardAnimation} style={settingsModalStyle}>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "1rem",
                    }}>
                    <IconButton
                        onClick={() => setIsSettings(prevState => !prevState)}
                        style={settingsModalCloseStyle}>
                        <CloseIcon style={{ color: "#0067E0", fontSize: "0.7rem" }} />
                    </IconButton>
                </div>
                <ButtonGroup orientation="vertical" variant="contained" fullWidth={true}>
                    <Button onClick={backHandler} style={{ ...buttonStyle, fontSize: "1rem" }}>
                        Back
                    </Button>
                    <Button onClick={deleteHandler} style={{ ...buttonStyle, fontSize: "1rem" }}>
                        Delete Category
                    </Button>
                </ButtonGroup>
            </motion.div>
        </motion.div>
    );
};

export default Settings;
