import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Notfound } from './pages/pageload.jsx';
import {
  Login,
  Signup,
} from './components/compload.jsx';
import {
  signupAction,
  loginAction
} from "./controllers/action.js"
import Home from './pages/home/home.jsx';
import { layoutLoader } from './controllers/loader.js';
import Username from './pages/:username/username.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    id: "layout",
    element: <App />,
    loader: layoutLoader,
    errorElement: <Notfound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction
      },
      {
        path: "signup",
        element: <Signup />,
        action: signupAction,
      }, {
        path: ":username",
        element: <Username />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
