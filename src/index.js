import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
} from "react-router-dom";
import Products from "./pages/Products";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<App/>,
//         errorElement:<Error/>,
//         children:[
//             {
//                 path:'rams',
//                 element:<Products/>
//             }]
//     }
// ])

root.render(
  <React.StrictMode>
    <BrowserRouter>
        {/*<RouterProvider router={router}/>*/}
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
