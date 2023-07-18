import {Link,NavLink} from 'react-router-dom';
const Nav = () => {
    return ( 
           <>
           <nav>
            <Link to='/'>
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path>
            </svg>
            <span className="logo__title">JustFelixDev</span>
            </Link>
            <div className="nav__items">
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to=''>About</NavLink>
                  <NavLink to=''>Resume</NavLink>
                  <NavLink to=''>Contact Me</NavLink>

            </div>
           </nav>
           </>
         );
}
 
export default Nav;