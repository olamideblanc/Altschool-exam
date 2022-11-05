import useCount from "./useCount";
import { Helmet } from "react-helmet-async";


    const CustomHook = () => {
        <Helmet>
        <title> Count Page </title>
        <meta name="description" content="Count page of the altschool exam"/>
        <link rel="customhook" href="/customhook" /></Helmet>
     const {value, count , handleChange, increment, decrement, reset} = useCount()

        return ( 
        <main>
            <h1 className="Custom">{count}</h1>
            <input 
             id="input"
             placeholder="Input number"
             value={value} 
             type="text"
             onChange={handleChange}
             />
          <div className="button-container-custom">
    <button  onClick={increment}> <strong>INCREMENT</strong> </button>
    <button  onClick={decrement}> <strong>DECREMENT</strong> </button>
    <button onClick={reset}><strong>RESET</strong></button>
    </div>
        
        </main>
     );
}
 
export default CustomHook;