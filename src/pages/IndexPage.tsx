import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MyTech from "../components/MyTech";
import Project from "../components/Project";

const IndexPage = () => {
    return ( 
      <>
              <Hero/>
              <MyTech/>
              <Project/>
             <div className="contacts">
                <Contact/>
             </div>
             <Footer/>
      </>
     );
}
 
export default IndexPage;