import React from "react";
import Link from "next/link";

import { useMediaQuery, Button } from "@material-ui/core";

const Category = ({ todo }) => {
    const mobile = useMediaQuery("(max-width:600px)");
    return (
        <div
            style={{
                width: mobile ? "90%" : "40rem",
                margin: "1rem auto",
                background: "#0067E0",
                borderRadius: "10px",
                color: "white",
                padding: "1rem 0.5rem",
            }}>
            <h2 style={{ textAlign: "center", textTransform: "capitalize" }}>{todo.todoCat}</h2>
            <hr style={{ margin: "1rem 0" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{ display: "flex", flexDirection: "column", fontSize: "0.7rem" }}>
                    Last Updated <span style={{ fontSize: "1rem" }}>{todo.dateTime}</span>
                </p>

                <Link href="todos/[todoId]" as={`todos/${todo.id}`}>
                    <Button
                        style={{
                            color: "white",
                            textTransform: "initial",
                            fontFamily: '"Lobster Two", cursive',
                        }}>
                        View {">"}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Category;
