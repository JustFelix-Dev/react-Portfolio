import { Link } from "react-scroll";
import Nav from "./Nav";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
    return ( 
         <>
           <div className="hero">
        <div className="hero__content">
            <div className="first">
                <div className="border">
                    <div></div>
                </div>
                <motion.h1 initial={{opacity:0,x:500}} animate={{opacity:1,x:0}} transition={{type:'spring',stiffness:160,delay:1}}>Hi there,I'm Felix</motion.h1>
                <motion.h1  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3,duration:6}}className="h2">
                <TypeAnimation sequence={['Are you ready to build or solve your web application problems with a savvy FullStack Developer ?',1000,'Welcome to my DevFolio!',2000]} wrapper="span" speed={50} repeat={Infinity}/>
                </motion.h1>
                   
                <Link className="buttons" activeClass="active" to="contact" spy={true} smooth={true} offset={100} duration={2000}>
                <motion.button initial={{opacity:0,scale:0.6}} animate={{opacity:1,scale:[0.6,1.4]}} transition={{type:'spring',stiffness:10,repeat:Infinity,duration:0.8,repeatType:'reverse',delay:6}} className="Btn">
                <div className="sign"><img style={{fontWeight:900}} src="/public/contact.svg" alt="contact-icon" height={20} width={20} /></div>
                <div className="text">&nbsp;&nbsp;Contact&nbsp;Me</div>
                </motion.button>
                </Link>
            </div>
            <div className="second">
            <svg  width={300} height={300} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:7,repeat:Infinity,repeatType:'mirror',ease:'easeInOut'}}  stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></motion.path>
         </svg>
            </div>
        </div>
             </div>
         </>
     );
}
 
export default Hero;