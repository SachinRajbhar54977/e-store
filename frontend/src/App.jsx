import { Outlet } from "react-router"
import Navigation from "./pages/auth/Navigation"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {


  return (
   <>
    <ToastContainer/>
    <Navigation/>
    <main className="py">
      
    </main>
   </>
  )
}

export default App
