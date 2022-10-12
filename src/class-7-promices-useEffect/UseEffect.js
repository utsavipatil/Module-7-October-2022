import React, { useEffect, useState } from 'react'

//useEffect - React Hook

function UseEffect() {

    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(0);

    // useEffect(()=> {
    //     //this will alwasys render whenever your dependecy changes
    //     console.log('I am your effect');
    // }, [count , useName]);

    useEffect(()=> {
        console.log('count one UseEffect');  
    },[count1]);

    useEffect(()=> {
        console.log('count two UseEffect');  
    },[count2]);

  return (
    <div>
        UseEffect
        <br/><br/>

        Count One : {count1}
        <button onClick={()=> {
            setCount1(count1 + 1)
            console.log('Count one useEffect inside function');
        }
        }>Inc count one</button>
        
        <br/><br/>

        Count One : {count2}
        <button onClick={()=> setCount2(count2 + 1)}>Inc count two</button>
    </div>
  )
}

export default UseEffect