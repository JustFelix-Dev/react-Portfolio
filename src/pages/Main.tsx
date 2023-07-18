import { Outlet } from 'react-router-dom';
const Main = () => {
    return ( 
           <>
              <h1>Welcome to my Portfolio!</h1>
               <Outlet/>
           </>
     );
}
 
export default Main;