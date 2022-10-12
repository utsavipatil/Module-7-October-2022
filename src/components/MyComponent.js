import React, { useState } from 'react';

function MyComponent(){
    
    const [count , setCount] = useState(0);

    function incCount(){
        // count++;
        console.log("Clicked");
        setCount(count + 1);
    }
    
    return ( <div>
        <h1>{count}</h1>
        <button onClick={incCount}>inc Count</button>
    </div>);
}

export default MyComponent;

