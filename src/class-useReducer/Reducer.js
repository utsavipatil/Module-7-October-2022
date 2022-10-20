import React, { useReducer } from 'react'

const initialState = {
    count : 0
}

function reducer(state , action){
    switch(action.type){
        case 'increment' : 
            return {count : state.count + 1}
        case 'decrement':
            return {count : state.count - 1}
        case 'reset' :
            return {count : 0}
        default : 
            return state
    }
}

function Reducer() {

    const [state , dispatch] = useReducer(reducer , initialState)

  return (
    <div>
    Reducer

    <br/>

    <div>Count : {state.count} </div>

        <button onClick={() => {
            dispatch({type : 'increment'})
        }}>
            Increment
        </button>

    <br/>

        <button onClick={()=> {
            dispatch({type : 'decrement'})
        }}>
            Decrement
        </button>

    <br/>

        <button onClick={ () => {
            dispatch({type : 'reset'})
        }}>
            Reset
        </button>
    </div>
  )
}

export default Reducer