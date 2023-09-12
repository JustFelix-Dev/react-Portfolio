import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import IndexPage from "./pages/IndexPage";
import { RouteContextProvider } from "./pages/context/routeContext";

const router = createBrowserRouter(
               createRoutesFromElements(
                <Route path="/" element={<Main/>}>
                <Route index element={<IndexPage/>}/>
                </Route>
               )
)
const App=()=>{

  return (
       <>
       <RouteContextProvider>
      <RouterProvider router={router}/>
       </RouteContextProvider>
      </>
  )
}

export default App
