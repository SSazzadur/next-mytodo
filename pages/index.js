import TopBar from "../components/TopBar";
import Categories from "../components/todo-categories/Categories";

export default function Home() {
    return (
        <div style={{ minHeight: "100vh", width: "100%" }}>
            <TopBar heading={"My Todo"} />
            <Categories />
        </div>
    );
}
