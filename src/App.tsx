import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SortData from './Components/sortData';
import NotFound from './Components/404';
import Reducer from './hooks/Reducer';
import Context from './hooks/Context';
import Weather from './Components/weather';
import Memos from './hooks/Memos'
import CallbacksHook from './hooks/CallbacksHook';
import Occurence from './hooks/Occurence';
import Wrapper from './HOC/Wrapper';
import MyClass from './Components/MyClass';
import PureClass from './Components/PureClass';
import Layout from './hooks/Layout';
function App() {
  const [count,setCount] = useState(0);

  useEffect(() => {
    // increment count every second
      // setCount(prevCount => prevCount + 1);
      // console.log("the count value is", count);
    
  },[count]);
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
        path:'/weather',
        Component:Weather
    },
    {
      path:'/memos',
      Component:Memos
    },
    {
      path:'/callbacks',
      Component:CallbacksHook
    },
    {
      path:'/occurence',
      Component:Occurence
    },
    {
      path:'myclass',
      Component:MyClass
    },
    {
      path:'pureclass',
      Component:PureClass
    },
    {
      path:'layout',
      Component:Layout
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

export default Wrapper(App);
