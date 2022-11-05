import { Helmet } from "react-helmet-async";

const Fallback = () => {
    <Helmet>
    <title> Error 404</title>
    <meta name="description" content="ErrorBoundarypage of the altschool exam"/>
    </Helmet>
    return (  
        <div>
            <h1>Something went wrong! </h1>
        </div>
    );
}
 
export default Fallback;