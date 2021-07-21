import React from "react";
import Link from "next/link";

import { useMediaQuery, Button } from "@material-ui/core";

import useStyles from "../../modules/useStyles";

import { motion } from "framer-motion";
import { cardAnimation } from "../../animations/Animations";

const Category = ({ todo }) => {
    const { cardStyle, cardHeadingStyle, belowLineStyle, dateTimeStyle, buttonStyle } = useStyles();

    return (
        <motion.div variants={cardAnimation} style={cardStyle}>
            <h2 style={cardHeadingStyle}>{todo.todoCat}</h2>
            <hr style={{ margin: "1rem 0" }} />
            <div style={belowLineStyle}>
                <p style={dateTimeStyle}>
                    Last Updated <span style={{ fontSize: "1rem" }}>{todo.dateTime}</span>
                </p>

                <Link href="todos/[todoId]" as={`todos/${todo.id}`}>
                    <Button variant="contained" style={buttonStyle}>
                        View {">"}
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default Category;
