import axios from "axios"

export default function ListItem(props) {

    function deleteTask() {
        axios.delete(`http://localhost:3030/task/${props._id}`)
            .then(() => {
                props.refreshView()
            })
    }

    return <li className={props.done ? 'done' : ''}>
        <label>{props.text}</label>
        <span>
            <input type='checkbox' defaultChecked={props.done} />
            {props.done ? null : <button
                onClick={deleteTask}
                className='x'
            >X</button>}
        </span>
    </li>
}