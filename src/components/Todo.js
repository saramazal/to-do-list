import List from "./List";
import TaskForm from "./TaskForm";

export default function ToDo() {
    return <div className="toDo">
        <TaskForm />
        <List />
        <hr />
        <List done={true} />
    </div>
}