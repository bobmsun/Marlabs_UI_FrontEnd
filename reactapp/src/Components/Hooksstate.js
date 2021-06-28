import React, { useState } from 'react'

function Hooksstate() {
    const [count, setCount] = useState(0)    // 0 is the initial value for count, if want to change the value of count, use setCount
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default Hooksstate
