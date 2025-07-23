import MainLayout from "../layout/MainLayout";
import Cart from "../pages/Cart";
import Category from "../pages/category";
import Home from "../pages/Home";
import Promotions from "../pages/Promotions";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const userRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "category/:categoryName", element: <Category /> },
    { path: "search", element: <Category /> },
    { path: "signIn", element: <SignIn /> },
    { path: "signUp", element: <SignUp /> },
    { path: "cart", element: <Cart /> },
    { path: "promotions", element: <Promotions /> },
  ],
};

export default userRoutes;
