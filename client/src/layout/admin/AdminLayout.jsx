import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="bg-gray-10 grid min-h-screen min-w-screen grid-cols-[250px_1fr] gap-8">
      <AdminSidebar />
      <Outlet />
    </div>
  );
}
