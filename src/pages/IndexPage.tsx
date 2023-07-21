import Contact from "../components/Contact";
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
      </>
     );
}
 
export default IndexPage;