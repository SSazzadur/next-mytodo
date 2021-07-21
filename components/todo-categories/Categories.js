import React from "react";
import Image from "next/image";
import Category from "./Category";

import { useTodo } from "../../modules/TodoContext";

import { useMediaQuery } from "@material-ui/core";

import { motion } from "framer-motion";
import { pageAnimation } from "../../animations/Animations";

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
                <Image
                    src="/images/empty-list.svg"
                    alt="empty-screen"
                    width="750px"
                    height="750px"></Image>
            </div>
        );
    }

    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ margin: "2rem 0" }}>
            {todos.map(todo => (
                <Category key={todo.id} todo={todo} />
            ))}
        </motion.div>
    );
};

export default Categories;
