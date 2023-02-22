import "./index.css";
import React from "react";
import {createBrowserRouter,
  RouterProvider,} from "react-router-dom";
import Home from "./home";
  

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    }])
  return (
    
    <div className="App">
      
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
        </div>
  )
}

export default App
