import React, { useState } from "react";

import { useAddTodo } from "../todo_modules/TodoContext";

import AddCategory from "./todo-categories/AddCategory";
import AddTodo from "./todo-body/AddTodo";
import Settings from "./Settings";

import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TuneIcon from "@material-ui/icons/Tune";

const TopBar = ({ heading }) => {
    const [isAddCat, setIsAddCat] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    const [isAddTodo, setIsAddTodo] = useAddTodo();

    return (
        <>
            {isAddCat && <AddCategory setIsAddCat={setIsAddCat} />}
            {isAddTodo && <AddTodo setIsAddTodo={setIsAddTodo} />}
            {isSettings && <Settings setIsSettings={setIsSettings} />}
            <div
                style={{
                    width: "100%",
                    background: "#0067E0",
                    borderRadius: "0 0 10px 10px",
                    boxShadow: "0 0 15px rgba(0,0,0,0.25)",
                }}>
                <div
                    style={{
                        width: "90%",
                        margin: "0 auto",
                        padding: "0.5rem 0",
                        color: "white",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <h1 style={{ textTransform: "capitalize" }}>{heading}</h1>
                    {heading === "My Todo" ? (
                        <IconButton
                            onClick={() => setIsAddCat(prevState => !prevState)}
                            style={{ background: "white", boxShadow: "0 0 15px rgba(0,0,0,0.25)" }}>
                            <AddIcon style={{ color: "#0067E0" }} />
                        </IconButton>
                    ) : (
                        <div style={{ justifySelf: "flex-end" }}>
                            <IconButton
                                onClick={() => setIsAddTodo(prevState => !prevState)}
                                style={{
                                    background: "white",
                                    boxShadow: "0 0 15px rgba(0,0,0,0.25)",
                                    marginRight: "1rem",
                                }}>
                                <AddIcon style={{ color: "#0067E0" }} />
                            </IconButton>
                            <IconButton
                                onClick={() => setIsSettings(prevState => !prevState)}
                                style={{
                                    background: "white",
                                    boxShadow: "0 0 15px rgba(0,0,0,0.25)",
                                }}>
                                <TuneIcon style={{ color: "#0067E0" }} />
                            </IconButton>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TopBar;
