import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Product from "./pages/product/Product";
import Layout from "./globals/component/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
