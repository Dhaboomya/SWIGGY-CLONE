import Header from './components/Header';
import ResContainer from './components/ResContainer';
import About from './components/About';
import Contact from './components/Contact';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import ResDetail from './components/ResDetails';

//useeffect ==> network call
//usestate ==> rerendering


const Home=()=>{
    return (
      <>
      <Header/>
      <Outlet/>
      <div>This is the last div</div>
      </>
    )
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
    children : [
      {
        path:"/",
        element: <ResContainer/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },{
        path : "restaurant/:id",
        element: <ResDetail/>
      }
    ]
  }
])

const App =() =>{
  return (
    <RouterProvider router={router}/>
  )
}


export default App;