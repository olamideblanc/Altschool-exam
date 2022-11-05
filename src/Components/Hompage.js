import { Helmet } from "react-helmet-async";

const Homepage = () => {
    return ( <>
    <Helmet>
        <title> Home</title>
        <meta name="description" content="Homepage of the altschool exam"/>
        <link rel="home" href="/" />
    </Helmet>
    <main>
        <p className="homepage"> This is the Hompage for the Altschool Exam. This App has two main pages implemented. The custom hook counter page and the usereducer counter page. There are also pages that implement 404 page, error boundary and good SEO </p>
    </main>
    </>
 );
}
 
export default Homepage