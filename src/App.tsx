import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import IndexPage from "./pages/IndexPage";
import { RouteContextProvider } from "./pages/context/routeContext";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "react-scroll-to-top";

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
       <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
      }}
       />
       <RouteContextProvider>
      <RouterProvider router={router}/>
       </RouteContextProvider>
       <ScrollToTop smooth viewBox="0 0 24 24" height="20"  svgPath="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </>
    
  )
}

export default App
