import {NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';
const Nav = () => {
    return ( 
           <>
           <nav>
            <NavLink to='/' className='home__link'>
            <img src="NavIcon.png" alt="nav-icon" height={40} width={40}/>
            <span className="logo__title">JustFelix <svg width={20} height={20} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path>
            </svg></span>
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
           </nav>
           </>
         );
}
 
export default Nav;