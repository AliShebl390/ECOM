import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Categories from "./Components/Categories/Categories";
import Layout from "./Components/Layout/Layout";
import { UserCotextProvider } from "./Context/UserCotext";
import NoutFound from "./Components/NotFound/NoutFound";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import GuardRouting from "./Components/GuardRouting/GuardRouting";
import RegisterCheck from "./Components/RegisterCheck/RegisterCheck";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

function App() {
    let routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "home",
                    element: (
                        <GuardRouting>
                            <Home />
                        </GuardRouting>
                    ),
                },

                {
                    path: "/Products",
                    element: (
                        <GuardRouting>
                            <Products />
                        </GuardRouting>
                    ),
                },
                {
                    path: "/Cart",
                    element: (
                        <GuardRouting>
                            <Cart />
                        </GuardRouting>
                    ),
                },
                {
                    path: "/Categories",
                    element: (
                        <GuardRouting>
                            <Categories />
                        </GuardRouting>
                    ),
                },
                {
                    path: "/Brands",
                    element: (
                        <GuardRouting>
                            <Brands />
                        </GuardRouting>
                    ),
                },

                {
                    index: true,
                    element: (
                        <RegisterCheck>
                            <Register />
                        </RegisterCheck>
                    ),
                },

                { path: "/forget", element: <ForgetPassword /> },
                { path: "/restpass", element: <ResetPassword /> },
                { path: "/Login", element: <Login /> },
                { path: "*", element: <NoutFound /> },
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
