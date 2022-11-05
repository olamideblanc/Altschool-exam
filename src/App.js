import UseReduce from "./Components/UseReducer";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Hompage";
import Errorpage from "./Components/Errorpage";
import {ErrorBoundary}  from "react-error-boundary";
import Fallback from "./Components/Fallback";
import CustomHook from "./Components/CustomHook";


const App = () => {

  const errorHandler = (error, errorInfo) => {
    console.log('Logging', error, errorInfo)
  }

  return (
  <>
   <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/customhook" element={<CustomHook/>}/>
    <Route path="/usereducer" element={<UseReduce/>}/>
    <Route path="/" element={<Homepage/>}/>
    <Route path="*" element={<Errorpage/>}/>
    </Routes>
    </Router> 
    </ErrorBoundary>
   </>)
}
 
export default App;