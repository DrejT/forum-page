import React from 'react';
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
  Logout
} from './components/compload.jsx';
import {
  signupAction,
  loginAction,
} from "./controllers/action.js"
import Home from './pages/home/home.jsx';
import {
  layoutLoader,
  usernameLoader,
  searchUsernameLoader,
  logoutLoader,
  threadLoader
} from './controllers/loader.js';
import Username from './pages/username/username.jsx';
import U from './pages/U/U.jsx';
import { sectionAction } from './api/section.js';
import { postsAction } from './api/post.js';
import { threadAction } from './api/thread.js';
import T from './pages/T/T.jsx';
import P from "./pages/P/P.jsx"
import ThreadSlug from './pages/T/threadslug.jsx';
import PostSlug from './pages/P/postslug.jsx';
import CreatePost from './components/create/post.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    id: "layout",
    element: <App />,
    loader: layoutLoader,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "api",
        children: [
          {
            path: "user"
          },
          {
            path: "section",
            action: sectionAction,
          },
          {
            path: "thread",
            action: threadAction
          },
          {
            path: "post",
            action: postsAction
          },
          {
            path: "comment"
          }
        ]
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
        path: "logout",
        element: <Logout />,
        loader: logoutLoader,
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
          }, {
            path: ":username/new",
            element: <CreatePost />
          }
        ]
      },
      {
        path: "t",
        element: <T />,
        children: [
          {
            path: ":threadslug",
            element: <ThreadSlug />,
            loader: threadLoader
          }
        ]
      },
      {
        path: "p",
        element: <P />,
        children: [
          {
            path: ":postslug",
            element: <PostSlug />,
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
