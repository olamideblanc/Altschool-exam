import { useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";

const UseReduce = () => {
  <Helmet>
  <title> UseReducer</title>
  <meta name="description" content="UseReducer page of the altschool exam"/>
  <link rel="UseReducer" href="/usereducer" />
</Helmet>
  const [value, setValue] = useState('')  
  const ACTION ={
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    DISPLAY: 'display'
  }
  
  function reducer(count, action) {
    switch (action.type) {
      case ACTION.INCREMENT:
        return (count+1)
      case ACTION.DECREMENT:
        return (count-1)
        case ACTION.RESET:
      return 0
      case ACTION.DISPLAY:
      return (value)
        default:
          return count
    }
    }
  const [count, dispatch] = useReducer(reducer,  0)


  const handleChange = event => {
    const result = Number(event.target.value.replace(/\D/g, ''))
    setValue(result)
    display() 
  }
  
  function increment() {
    dispatch({type : ACTION.INCREMENT})
  }

  function decrement() {
    dispatch({type : ACTION.DECREMENT})
  }

  function reset() {
    dispatch({type : ACTION.RESET})
  }

  function display() {
    dispatch({type : ACTION.DISPLAY })    
  }

  return (<div>
    <h2 id="count">{count}</h2>
    <input 
    placeholder="Input number"
    value={value} 
    type="text"
    onChange={handleChange}
    /> 
    <div className="button-container">
    <button onClick={increment}> <strong>INCREMENT</strong> </button>
    <button onClick={decrement}> <strong>DECREMENT</strong> </button>
    <button onClick={reset}><strong>RESET</strong></button>
    </div>
  
  </div>
    );
    
}
 
export default UseReduce