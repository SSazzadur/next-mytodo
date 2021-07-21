import React, { useState } from "react";

import { useAddTodo } from "../modules/TodoContext";

import AddCategory from "./todo-categories/AddCategory";
import AddTodo from "./todo-body/AddTodo";
import Settings from "./Settings";

import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TuneIcon from "@material-ui/icons/Tune";

import useStyles from "../modules/useStyles";

const TopBar = ({ heading }) => {
    const [isAddCat, setIsAddCat] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    const [isAddTodo, setIsAddTodo] = useAddTodo();

    const { topBarConatinerStyle, topBarStyle, iconButtonStyle } = useStyles();

    return (
        <>
            {isAddCat && <AddCategory setIsAddCat={setIsAddCat} />}
            {isAddTodo && <AddTodo setIsAddTodo={setIsAddTodo} />}
            {isSettings && <Settings setIsSettings={setIsSettings} />}
            <div style={topBarConatinerStyle}>
                <div style={topBarStyle}>
                    <h1 style={{ textTransform: "capitalize" }}>{heading}</h1>
                    {heading === "My Todo" ? (
                        <IconButton
                            onClick={() => setIsAddCat(prevState => !prevState)}
                            style={iconButtonStyle}>
                            <AddIcon />
                        </IconButton>
                    ) : (
                        <div style={{ justifySelf: "flex-end" }}>
                            <IconButton
                                onClick={() => setIsAddTodo(prevState => !prevState)}
                                style={{ ...iconButtonStyle, marginRight: "1rem" }}>
                                <AddIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => setIsSettings(prevState => !prevState)}
                                style={iconButtonStyle}>
                                <TuneIcon />
                            </IconButton>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TopBar;
