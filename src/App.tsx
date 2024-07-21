import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SortData from './Components/sortData';
import NotFound from './Components/404';


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      Component:SortData
    },
    {
      path:'*',
      Component:NotFound    
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
