import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import routes from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

function App() {
 

  return (
    <>
      <RouterProvider router={routes}>
        
      </RouterProvider>
      <Toaster/>
      
    </>
  )
}

export default App
