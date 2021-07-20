import "../styles/globals.css";
import { TodoProvider } from "../todo_modules/TodoContext";

import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <TodoProvider>
            <Layout />
            <Component {...pageProps} />
        </TodoProvider>
    );
}

export default MyApp;
