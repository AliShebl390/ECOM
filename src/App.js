import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Categories from "./Components/Categories/Categories";
import Layout from "./Components/Layout/Layout";
import { UserCotextProvider, UserContext } from "./Context/UserCotext";
import { useContext, useEffect } from "react";
import NoutFound from "./Components/NotFound/NoutFound";

function App() {
    let routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "home", element: <Home /> },
                { path: "/Products", element: <Products /> },
                { path: "*", element: <NoutFound /> },
                { path: "/Cart", element: <Cart /> },
                { path: "/Categories", element: <Categories /> },
                { path: "/Brands", element: <Brands /> },
                { path: "/Login", element: <Login /> },
                { index: true, element: <Register /> },
            ],
        },
    ]);

    return (
        <UserCotextProvider>
            <RouterProvider router={routes}></RouterProvider>
        </UserCotextProvider>
    );
}

export default App;
