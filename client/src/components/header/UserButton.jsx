import { User, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../ui/DropDown";

export default function UserButton() {
  const navigate = useNavigate();

  const userOptions = [
    { label: "Sign in", icon: <LogIn size={16} /> },
    { label: "Sign out", icon: <LogOut size={16} /> },
  ];

  const [openUserOption, setOpenUserOption] = useState(false);
  const [selectedUserOption, setSelectedUserOption] = useState("Sign in");

  function handleSelectUserOption(option) {
    if (option == "Sign in") navigate("/signIn");
  }

  return (
    <div
      className="btn-icon relative"
      onClick={(e) => setOpenUserOption((prev) => !prev)}
    >
      <User />

      <DropDown
        options={userOptions}
        selectedOption={selectedUserOption}
        condition={openUserOption}
        handleClick={handleSelectUserOption}
        className="bg-gray-20 absolute top-[calc(100%+12px)] right-0 z-200 min-w-fit"
      />
    </div>
  );
}
