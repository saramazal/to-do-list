import { useState } from 'react'

function Clicker() {
    const [counter, setCounter] = useState(0)

    function clicked() {
        setCounter(counter + 1)
    }

    return <div>
        <hr />
        <h1>You clicked {counter} times</h1>
        <button className="click" onClick={clicked}>Click Me!</button>
    </div>
}

export default Clicker