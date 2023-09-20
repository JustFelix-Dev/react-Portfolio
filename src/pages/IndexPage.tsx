import AboutPage from "../components/AboutPage";
import AllProject from "../components/AllProject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MyTech from "../components/MyTech";
import Project from "../components/Project";
import { RouteContext } from "./context/routeContext";
import { useContext, useEffect } from 'react';

const IndexPage = () => {

   const routeContext = useContext(RouteContext);
   if(!routeContext){
      return null;
   }
   const { pageType } = routeContext;

   useEffect(()=>{ window.scrollTo(0,0)},[pageType])
   

    return ( 
      <>
          {
            pageType == 'home' ? (
               <div>
               <Hero/>
               <MyTech/>
               <Project/>
              <div className="contacts">
                 <Contact/>
              </div>
              </div>
            ) :
             pageType == 'about' ? (
               <div>
                <AboutPage/>
               </div>
            ) :
            pageType == 'project' && (
               <div>
                  <AllProject/>
               </div>
            )
               }
             <Footer/>
      </>
     );
}
 
export default IndexPage;