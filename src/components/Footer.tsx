import {BsLinkedin,BsGithub,BsTelephoneFill} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
    return ( 
            <>
            <footer>
              <div>
                <h3>Connect With Me : </h3>
                <div className="icons">
                <a target='blank'className='linkedin' href="https://www.linkedin.com/in/justfelixowolabi/"><span><BsLinkedin/></span></a>    
                 <a className='twitter' target='blank' href="https://twitter.com/justfelix_dev"><span><AiFillTwitterCircle/></span></a> 
                <a className='github' target='blank' href="https://github.com/JustFelix-Dev"><span><BsGithub/></span></a>  
                </div>
                <div className="phoneNumber">
                    <span>|<BsTelephoneFill/> : (+234)-8146225497</span>
                </div>
                </div> 
            </footer>
            </>
     );
}
 
export default Footer;