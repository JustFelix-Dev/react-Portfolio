import { motion } from "framer-motion";
import { useContext } from "react";
import { RouteContext } from "../pages/context/routeContext";


const Project = () => {

   const routeContext = useContext(RouteContext);
   if(!routeContext){
      return null;
   }
   const { handlePageType } = routeContext;
    return ( 
            <>
             <div className="projects">
                <h2>MY PROJECTS</h2>
                <p>These projects showcases my skills and experience. Each project is described with links to code repositories and live servers in it.It reflects my ability to build and solve software products/problems,work with different technologies,and manage projects efficiently.</p>
                <div className="projectData">
                  <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.6,duration:1}}  className="first">
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/mern-airBnB-app"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a className="link" target="blank" href={'https://airbnb.felixdev.com.ng'}>
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694427320/Github%20ReadMe%20Screenshots/Screenshot_73_hdcphh.png" alt="icon" />
                  </a>
                     <p className="details">
                          Booking Application
                     </p>
                  </motion.div>
                  <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.6,duration:1}} className="second">
                  <a  target="blank" className="github" href="https://github.com/JustFelix-Dev/React-budgetApp"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a target="blank" className="link" href="https://react-budget-app-orpin.vercel.app/" >
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694437857/Github%20ReadMe%20Screenshots/Screenshot_77_jff20f.png" alt="icon" />
                  </a>
                     <p className="details">
                          Budgetry
                     </p>
                  </motion.div>
                  <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.6,duration:1}} className="third">
                  <a target="blank" className="github" href="https://github.com/JustFelix-Dev/mern-scheduley"><img src="/github.png" alt="icon" height={20} width={20} /></a>
                  <a target="blank" className="link" href="https://www.scheduley.felixdev.com.ng" >
                     <img src="https://res.cloudinary.com/dljgkzwfz/image/upload/v1694432699/Github%20ReadMe%20Screenshots/Screenshot_74_uapnm0.png" alt="icon" />
                  </a>
                     <p className="details">
                          Scheduley
                     </p>
                  </motion.div>
                </div>
                <div onClick={()=>handlePageType('project')} className="project__button">
                <div className="scene">
                  <div className="cube">
                     <span className="side top">HANG TIGHT...😊</span>
                     <span className="side front">Load More</span>
                  </div>
                  </div>
                </div>
             </div>
            </>
     );
}
 
export default Project;