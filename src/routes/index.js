import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Logout from "pages/Logout";
import Home from "pages/Home";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/service",
      element: <h1>Service Page</h1>,
    },
    {
      path: "/about-us",
      element: <h1>About Us</h1>,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <h1>User Home Page</h1>,
        },
        {
          path: "/profile",
          element: <h1>User Profile</h1>,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
