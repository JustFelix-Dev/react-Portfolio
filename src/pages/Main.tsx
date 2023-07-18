import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
const Main = () => {
    return ( 
           <>
                <Nav/>
               <Outlet/>
           </>
     );
}
 
export default Main;