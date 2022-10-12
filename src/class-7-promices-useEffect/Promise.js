import React, { useEffect, useState } from 'react'

function Promise() {

    const [userMessages, setUserMessages] = useState('')
    const userMessage = [];

    useEffect(()=> {
        fetch('https://learning-at-acciojob-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            for (const key in data){
                userMessage.push(data[key])
            }
            console.log(userMessage);
            setUserMessages(userMessage) //It will re render component and cycle goes on from initial 
        })
    }, [])

    console.table(userMessages);

    // fetch('https://learning-at-acciojob-default-rtdb.asia-southeast1.firebasedatabase.app/message.json') //We are not using useEffect so, it will give infinite data
    // .then(response => response.json())
    // .then(data => {
    //     // console.log(data)
    //     for (const key in data){
    //         userMessage.push(data[key])
    //     }
    //     console.log(userMessage);
    //     setUserMessages(userMessage) //It will re render component and cycle goes on from initial 
    // })

  return (
    <div>Promise
        {
            userMessages && userMessages.map(message => {
                return (
                    <div style={
                        {
                            color : "white",
                            backgroundColor:'orchid',
                            padding: 20,
                            margin: 10,
                            borderRadius:10,
                            textAlign:'center'
                        }
                    }>
                        {message.userName} : {message.userMessage}
                    </div>
                ) 
            })
        }
    </div>
  )
}

export default Promise
