import Conditional from './class-6-Condition-listRendering/Conditional';
import FormHanel from './class-5-Form-Handling/FormHandel';
import List from './class-6-Condition-listRendering/List';
import UseEffect from './class-7-promices-useEffect/UseEffect';
import Promise from './class-7-promices-useEffect/Promise';
import UtsaviContext from './context';
import { useState } from 'react';
import Child from './class-useContext/Child';
import Junior from './class-useContext/Junior';
import Reducer from './class-useReducer/Reducer';

function App() {

  const[appTheme , setAppTheme] = useState({
    theme : 'light',
    color : 'green'
  });

  return (

    <UtsaviContext.Provider value = {appTheme}>
      <div className="App">
      {/* <FormHanel /> */}
      {/* <Conditional/> */}
      {/* <List/> */}
      {/* <UseEffect/> */}
      {/* <Promise/> */}
      {/* <Child/> */}
      {/* <Junior/> */}
      App.js
      <Reducer/>
    </div>
    </UtsaviContext.Provider>
    
  );
}

export default App;


/*
context.js --> App.js (provides everyone)--> Child1
                      --> Child2
*/