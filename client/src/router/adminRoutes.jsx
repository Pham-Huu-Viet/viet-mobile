import AdminLayout from "../layout/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";

const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { index: true, element: <Dashboard /> },
    { path: "dashboard", element: <Dashboard /> },
    { path: "users", element: <Users /> },
    { path: "*", element: <></> },
  ],
};

export default adminRoutes;
