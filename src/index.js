import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import ResMenu from './components/ResMenu';
import Cart from './components/Cart';


const route=createBrowserRouter([

  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Body/>
    },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/resmenu/:id",
    element:<ResMenu/>
  },

],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={route} />

);

