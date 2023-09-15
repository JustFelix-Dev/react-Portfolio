import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
    
    return ( 
         <>
           <div className="hero">
        <div className="hero__content">
            <div className="firstparent">
                <div className="border">
                    <div></div>
                </div>
                <motion.h1 initial={{opacity:0,x:500}} animate={{opacity:1,x:0}} transition={{type:'spring',stiffness:160,delay:1}}>Hi there,I'm Felix</motion.h1>
                <motion.h1  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3,duration:6}}className="h2">
                <TypeAnimation sequence={['Are you ready to build or solve your web application problems with a savvy FullStack Developer ?',1000,'Welcome to my DevFolio!',2000]} wrapper="span" speed={50} repeat={Infinity}/>
                </motion.h1>
                   
                <Link className="buttons" activeClass="active" to="contact" spy={true} smooth={true} offset={100} duration={2000}>
                <motion.button initial={{opacity:0,scale:0.6}} animate={{opacity:1,scale:[0.6,1]}} transition={{type:'spring',stiffness:10,repeat:Infinity,duration:0.8,repeatType:'reverse',delay:6}} className="Btn">
                <div className="sign"><img style={{fontWeight:900}} src="/contact.svg" alt="contact-icon" height={20} width={20} /></div>
                <div className="text">&nbsp;&nbsp;Contact&nbsp;Me</div>
                </motion.button>
                </Link>
            </div>
            <div className="secondparent">
                <motion.div initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{duration:4,delay:1}} className="myImage"></motion.div>
                <div className="myIcons">
            <motion.div initial={{opacity:0,scale:0.2}} animate={{opacity:1,scale:1.1}} transition={{type:'spring',stiffness:110,delay:1,duration:7, repeat: Infinity , repeatType:'mirror',repeatDelay:7}} className="first"> <img src="/tailwind.png" alt="icon" height={30} width={30} style={{borderRadius:"50px"}} /></motion.div>
            <motion.div initial={{opacity:0,scale:0.2}} animate={{opacity:1,scale:1.1}} transition={{type:'spring',stiffness:110,delay:1.5,duration:7,repeat: Infinity , repeatType:'mirror',repeatDelay:7}} className="second"> <img src="/typescript.png" alt="icon"  height={30} width={30} style={{borderRadius:"50px"}}  /></motion.div>
            <motion.div initial={{opacity:0,scale:0.2}} animate={{opacity:1,scale:1.1}} transition={{type:'spring',stiffness:110,delay:2,duration:7,repeat: Infinity , repeatType:'mirror',repeatDelay:7}} className="third"> <img src="/react.png" alt="icon"  height={30} width={30} style={{borderRadius:"50px"}}  /></motion.div>
            <motion.div initial={{opacity:0,scale:0.2}} animate={{opacity:1,scale:1.1}} transition={{type:'spring',stiffness:110,delay:2.5,duration:7,repeat: Infinity , repeatType:'mirror',repeatDelay:7}} className="fourth"> <img src="/git.png" alt="icon" height={30} width={30}style={{borderRadius:"50px"}}  /></motion.div>
            <motion.div initial={{opacity:0,scale:0.2}} animate={{opacity:1,scale:1.1}} transition={{type:'spring',stiffness:110,delay:3,duration:7,repeat: Infinity , repeatType:'mirror',repeatDelay:7}} className="fifth"> <img src="/nodejs.png" alt="icon"  height={30} width={30} style={{borderRadius:"50px"}}  /></motion.div>
            <motion.div initial={{opacity:0,scale:0.2}} animate={{opacity:1,scale:1.1}} transition={{type:'spring',stiffness:110,delay:3.5,duration:7,repeat: Infinity , repeatType:'mirror',repeatDelay:7}} className="sixth"> <img src="/javascript.png" alt="icon"  height={30} width={30} style={{borderRadius:"50px"}}  /></motion.div>
          </div>
            </div>
        </div>
     </div>
         </>
     );
}
 
export default Hero;