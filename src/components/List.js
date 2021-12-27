import ListItem from "./ListItem";

export default function List(props) {
    return <ul>
        <ListItem done={props.done} />
        <ListItem done={props.done} />
    </ul>
}