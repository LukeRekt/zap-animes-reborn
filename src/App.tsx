
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Anime from './pages/Anime'

function App() {

  function Layoult({children}){
    return <><Header/> {children}</>
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layoult><Home/></Layoult>
    },
    {
      path: "/anime/:nome",
      element: <Layoult><Anime/></Layoult>
    }
  ])

  return (
    <>
    
      <RouterProvider router={router}/>

    </>
  )
}

export default App
