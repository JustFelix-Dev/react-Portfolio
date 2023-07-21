import { motion } from 'framer-motion';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';

const Nav = () => {
    return ( 
           <>
           <motion.nav initial={{y:-190}} animate={{y:0}} transition={{type:'spring',stiffness:160,delay:2}}>
            <NavLink to='/' className='home__link'>
            <motion.span initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{type:'spring',stiffness:150,duration:1,delay:4}} className="logo__title">JustFelix <svg width={20} height={20} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <motion.path initial={{opacity:0,pathLength:0}} animate={{opacity:1,pathLength:1}} transition={{duration:7,delay:4}} stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
            </svg></motion.span>
            </NavLink>
            <div className="nav__items">
                <ul>
                 <li><NavLink to='/'>Home</NavLink></li> 
                 <li><NavLink to='/about'>About</NavLink></li> 
                 <li><NavLink to='/resume'>Resume</NavLink></li> 
                 <li><Link className='contact' activeClass="active" to="contact" spy={true} smooth={true} offset={100} duration={2000}>Contact Me</Link>
                 </li>
                </ul>
            </div>
           </motion.nav>
           </>
         );
}
 
export default Nav;