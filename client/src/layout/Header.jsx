import HeaderActions from "../components/header/HeaderActions";
import Logo from "../components/header/Logo";
import NavBar from "../components/header/Navbar";

export default function Header() {
  return (
    <div className="bg-gray-20 sticky top-0 z-100 h-16 w-full">
      <div className="section-content">
        <Logo />
        <NavBar />
        <HeaderActions />
      </div>
    </div>
  );
}
