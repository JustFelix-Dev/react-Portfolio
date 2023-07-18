import {Link,NavLink} from 'react-router-dom';
const Nav = () => {
    return ( 
           <>
           <nav>
            <Link to='/' className='home__link'>
            <img src="NavIcon.png" alt="nav-icon" height={40} width={40}/>
            <span className="logo__title">JustFelixDev</span>
            </Link>
            <div className="nav__items">
                <ul>
                 <li><NavLink to='/'>Home</NavLink></li> 
                 <li><NavLink to='/about'>About</NavLink></li> 
                 <li><NavLink to='/resume'>Resume</NavLink></li> 
                 <li><NavLink className='contact' to='/contact'>Contact Me</NavLink></li> 
                </ul>
            </div>
           </nav>
           </>
         );
}
 
export default Nav;