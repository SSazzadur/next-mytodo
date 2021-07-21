import { useState, useContext, createContext, useEffect } from "react";

const TodoContext = createContext();
const TodoIdContext = createContext();
const TodoAddContext = createContext();
const TodoEditContext = createContext();
const TodoBodyContext = createContext();

export const useTodo = () => {
    return useContext(TodoContext);
};

export const useTodoId = () => {
    return useContext(TodoIdContext);
};

export const useAddTodo = () => {
    return useContext(TodoAddContext);
};

export const useEditTodo = () => {
    return useContext(TodoEditContext);
};

export const useTodoBody = () => {
    return useContext(TodoBodyContext);
};

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [todoId, setTodoId] = useState("");
    const [isAddTodo, setIsAddTodo] = useState(false);
    const [editTodoId, setEditTodoId] = useState("");
    const [todoBody, setTodoBody] = useState("");

    useEffect(() => {
        if (window.localStorage.getItem("my-todos") !== null) {
            setTodos(JSON.parse(window.localStorage.getItem("my-todos")));
        }
    }, []);
    return (
        <>
            <TodoContext.Provider value={[todos, setTodos]}>
                <TodoIdContext.Provider value={[todoId, setTodoId]}>
                    <TodoAddContext.Provider value={[isAddTodo, setIsAddTodo]}>
                        <TodoEditContext.Provider value={[editTodoId, setEditTodoId]}>
                            <TodoBodyContext.Provider value={[todoBody, setTodoBody]}>
                                {children}
                            </TodoBodyContext.Provider>
                        </TodoEditContext.Provider>
                    </TodoAddContext.Provider>
                </TodoIdContext.Provider>
            </TodoContext.Provider>
        </>
    );
};
