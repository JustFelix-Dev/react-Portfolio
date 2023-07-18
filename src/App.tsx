import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";

const router = createBrowserRouter(
               createRoutesFromElements(
                <Route path="/" element={<Main/>}>
                   
                </Route>
               )
)
const App=()=>{

  return (
       <>
      <RouterProvider router={router}/>
      </>
  )
}

export default App
