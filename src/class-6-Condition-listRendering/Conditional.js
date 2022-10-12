import React, { useState } from 'react'

function Conditional() {

    const [count , setCount] = useState(0);

    return(
        <div>

            {
                !(count%2) && <p>Even Number {count}</p>
            }

            <button onClick={() => setCount(count + 1)}>Toggle</button>
        </div>
    );

}

export default Conditional