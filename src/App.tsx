import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter(
               createRoutesFromElements(
                <Route path="/" element={<Main/>}>
                <Route index element={<IndexPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
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
