import "../styles/globals.css";
import { TodoProvider } from "../todo_modules/TodoContext";

function MyApp({ Component, pageProps }) {
    return (
        <TodoProvider>
            <Component {...pageProps} />
        </TodoProvider>
    );
}

export default MyApp;
