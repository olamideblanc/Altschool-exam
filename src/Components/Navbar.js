import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
    <Helmet>
    <title> Navbar</title>
    <meta name="description" content="navbar page of the altschool exam"/>
    </Helmet>
    return ( <header>
    <nav className="link-contain">
        <Link to='/'>Home Page</Link>
        <Link to='/usereducer'>Usereducer Page</Link>
        <Link to='/customhook'>Custom Hook Page</Link>
    </nav>
    </header> );
}
 
export default Navbar;