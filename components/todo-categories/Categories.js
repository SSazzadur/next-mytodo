import React from "react";
import Image from "next/image";
import Category from "./Category";

import { useTodo } from "../../todo_modules/TodoContext";

import { useMediaQuery } from "@material-ui/core";

const Categories = () => {
    const [todos, setTodos] = useTodo();

    const mobile = useMediaQuery("(max-width:600px)");

    if (todos.length === 0) {
        return (
            <div
                style={{
                    margin: "0 auto",
                    display: "grid",
                    placeContent: "center",
                    width: mobile ? "80%" : "30rem",
                    height: "80vh",
                }}>
                <Image src="/images/empty-list.svg" width="750px" height="750px"></Image>
            </div>
        );
    }

    return (
        <div style={{ margin: "2rem 0" }}>
            {todos.map(todo => (
                <Category key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default Categories;
