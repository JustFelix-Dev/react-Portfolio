import {BsLinkedin,BsGithub,BsTelephoneFill} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
    return ( 
            <>
            <footer>
              <div>
                <h3>Connect With Me : </h3>
                <div className="icons">
                  <span><BsLinkedin/></span>
                  <span><AiFillTwitterCircle/></span>
                  <span><BsGithub/></span>
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