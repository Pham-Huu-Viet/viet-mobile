import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="bg-gray-10 flex min-h-screen min-w-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
