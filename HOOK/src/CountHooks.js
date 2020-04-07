import React, {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Number: {count}</h1>
            <button onClick={()=> setCount(count +1)}>++</button>
        </div>
    )
}

export default Count;
