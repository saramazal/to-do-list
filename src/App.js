import { useState } from "react";
import Clock from "./Clock";
import Title from "./components/Title";
import ToDo from "./components/ToDo";

export default function App() {
    const [show, setShow] = useState()

    return <main>
        {show ? <Clock /> : ''}
        <button className="clock" onClick={() => setShow(!show)}>click</button>
        <Title />
        <ToDo />
    </main>
}