import "./index.css";
import React from "react";
import {createBrowserRouter,
  RouterProvider,} from "react-router-dom";
import Home from "./home";
import Destination from "./destination";
import Crew from "./crew";
  

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/destination",
      element:<Destination/>,
    },
    {
      path: "/crew",
      element:<Crew/>,
    },
  ])
  return (
    
    <div className="App">
      
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
        </div>
  )
}

export default App
