import { Mail, User } from "lucide-react";
import Dialog from "../../ui/Dialog";
import InputItem from "../../ui/InputItem";
import { useState } from "react";
import { userRoleOption } from "../../../config/admin/users";
import MenuDropDown from "../../ui/MenuDropDown";

export default function AddUserDialog({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState(userRoleOption?.[0]?.label);

  return (
    <Dialog onClose={onClose}>
      <div className="flex-col-center mb-8 w-full gap-4">
        <h2 className="mb-4">Add User</h2>
        {/* User name */}
        <InputItem
          id="name"
          placeholder="Name"
          type="name"
          value={name}
          onChange={setName}
          iconLeft={<User />}
          background="bg-gray-10"
        />

        {/* User email */}
        <InputItem
          id="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={setEmail}
          iconLeft={<Mail />}
          background="bg-gray-10"
        />

        {/* User role */}
        <MenuDropDown
          options={userRoleOption}
          selectedOption={userRole}
          onClickOption={(value) => setUserRole(value)}
          className={"w-full"}
          background="bg-gray-10"
          positionDrop="relative"
          height={"h-12"}
        />
      </div>
    </Dialog>
  );
}
