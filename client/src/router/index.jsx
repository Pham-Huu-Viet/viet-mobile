import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import userRoutes from "./userRoutes";
import adminRoutes from "./adminRoutes";
import NotFound from "../pages/NotFound,";

const router = createHashRouter([
  userRoutes,
  adminRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
// import Home from "../pages/Home";
// import Category from "../pages/category";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
// import Cart from "../pages/Cart";
// import Promotions from "../pages/Promotions";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },

//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//         path: "category/:categoryName",
//         element: <Category />,
//       },
//       {
//         path: "search",
//         element: <Category />,
//       },
//       {
//         path: "signIn",
//         element: <SignIn />,
//       },
//       {
//         path: "signUp",
//         element: <SignUp />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       {
//         path: "promotions",
//         element: <Promotions />,
//       },
//     ],
//   },
// ]);

// export default function AppRouter() {
//   return <RouterProvider router={router} />;
// }
