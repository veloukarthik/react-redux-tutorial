import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SortData from './Components/sortData';
import NotFound from './Components/404';
import Reducer from './hooks/Reducer';
import Context from './hooks/Context';



function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      Component:SortData
    },
    {
      path:'/reducer',
      Component:Reducer
    },
    {
      path:'/context',
      Component:Context
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
