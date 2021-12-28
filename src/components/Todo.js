import { useEffect, useState } from "react";
import List from "./List";
import TaskForm from "./TaskForm";
import axios from 'axios'

export default function ToDo() {
    const [tasksList, setTasksList] = useState([])

    useEffect(getTasks, [])

    function getTasks() {
        axios.get('http://localhost:3030/task')
            .then(result => {
                setTasksList(result.data)
            })
    }

    console.log('tasksList', tasksList)

    return <div className="toDo">
        <TaskForm />
        <List list={tasksList.filter(t => !t.done)} />
        <hr />
        <List list={tasksList.filter(t => t.done)} />
    </div>
}