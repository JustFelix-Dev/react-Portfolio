import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';
import { RouteContext } from '../pages/context/routeContext';


const Nav = () => {
    const routeContext = useContext(RouteContext);
    const menuRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);


    if(!routeContext){
        return null;
    }

    const handleMenu = ()=>{
        menuRef.current?.classList.toggle('change')
        navRef.current?.classList.toggle('showMenu')
    }

    const {handlePageType} = routeContext;
    return ( 
           <>
           <motion.nav initial={{y:-190}} animate={{y:0}} transition={{type:'spring',stiffness:160,delay:2}}>
            <NavLink to='/' className='home__link'>
            <motion.span initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{type:'spring',stiffness:150,duration:1,delay:4}} className="logo__title">JustFelix   <svg  width={20} height={20} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:7,repeat:Infinity,repeatType:'mirror',ease:'easeInOut'}}  stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></motion.path>
         </svg></motion.span>
            </NavLink>
            <div ref={menuRef} className="container menu" onClick={handleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                </div>
            <div ref={navRef} className="nav__items">
                <ul>
                <div  onClick={handleMenu} className='cancel__img'><img src="/cancel.png" alt="icon" height={20} width={20} /></div>
                 <li onClick={()=>handlePageType('home')} ><a >Home</a></li> 
                 <li onClick={()=>handlePageType('about')} ><a >About</a></li> 
                 <li><a href="https://drive.google.com/file/d/1eZErtoeKKUqufwSQwX_VabmrVlX6rD03/view?usp=drive_link" download='Felix Resume.pdf' >Resume</a></li>
                 <li><Link className='contact' activeClass="active" to="contact" spy={true} smooth={true} offset={100} duration={2000}>Contact Me</Link>
                 </li>
                </ul>
            </div>
           </motion.nav>
           </>
         );
}
 
export default Nav;