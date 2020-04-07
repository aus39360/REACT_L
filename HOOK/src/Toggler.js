import React, { useState } from 'react'

function Toggler() {
    const [isfun, setisfun] = useState(true)
    const toggle = () => {
        setisfun(!isfun)
    }
    return(
        <div>
            <h1 onClick={toggle}>{isfun ? 'X': 'Y'}</h1>
        </div>
    )
}

export default Toggler;