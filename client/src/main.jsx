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
  loginAction,
} from "./controllers/action.js"
import Home from './pages/home/home.jsx';
import { 
  layoutLoader,
  usernameLoader,
  searchUsernameLoader
 } from './controllers/loader.js';
import Username from './pages/:username/username.jsx';
import Post from './pages/:username/new/post.jsx';
import U from './pages/U/U.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    id: "layout",
    element: <App />,
    loader: layoutLoader,
    errorElement: <Notfound />,
    children: [
      {
        index:true,
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
      },
      {
        path: "u",
        element: <U />,
        loader: searchUsernameLoader,
        children: [
          {
            path: ":username",
            element: <Username />,
            loader: usernameLoader,
            children: [
              {
                path: "new",
                element: <Post />
              }
            ]
          }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
