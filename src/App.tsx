import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import IndexPage from "./pages/IndexPage";

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
      <RouterProvider router={router}/>
      </>
  )
}

export default App
