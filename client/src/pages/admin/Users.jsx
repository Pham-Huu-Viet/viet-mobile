import { Filter, Search, UserPlus } from "lucide-react";
import InputItem from "../../components/ui/InputItem";
import MenuDropDown from "../../components/ui/MenuDropDown";
import useGetDataStore from "../../hook/useGetDataStore";
import {
  setSearchUser,
  setUserRole,
  setUserStatus,
} from "../../store/slices/admin/userSlice";
import { useDispatch } from "react-redux";
import { userRoleOption, userStatusOption } from "../../config/admin/users";
import UserList from "../../components/admin/users/UserList";
import AddUserDialog from "../../components/admin/users/AddUserDialog";
import { useState } from "react";

export default function Users() {
  const dispatch = useDispatch();

  const userOverview = [
    { label: "Total Users", count: 8 },
    { label: "Customers", count: 6 },
    { label: "Staff", count: 1 },
    { label: "Admin", count: 1 },
    { label: "Active", count: 7 },
    { label: "Blocked", count: 1 },
  ];

  const { searchUser, userRole, userStatus } = useGetDataStore();

  const [isOpenAddUser, setIsOpenAddUser] = useState(false);

  return (
    <div className="section-admin card-static-col rounded-none">
      <div className="flex-between w-full">
        {/* Title */}
        <div className="flex-col-start w-full">
          <h1>User Management</h1>
          <p className="text-sub-text">
            Account management and user authorization
          </p>
        </div>

        {/* Button Add user */}
        <div
          className="btn text-accent h-full w-fit"
          onClick={() => setIsOpenAddUser(true)}
        >
          <UserPlus size={16} className="mr-3" /> Add User
        </div>
      </div>

      {/* Overview */}
      <div className="grid w-full grid-cols-6 gap-4">
        {userOverview?.map((item, index) => (
          <div key={index} className="card-static-col gap-4">
            <strong className="text-2xl">{item?.count}</strong>
            <span className="whitespace-nowrap">{item?.label}</span>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex-col-start w-full gap-4">
        <div className="flex-start gap-2">
          <Filter size={16} /> Filter
        </div>

        {/* Filter option */}
        <div className="flex-between w-full">
          {/* Input search user name */}
          <InputItem
            id="user"
            placeholder="Search for users"
            type="text"
            value={searchUser}
            onChange={(value) => dispatch(setSearchUser(value))}
            iconLeft={<Search />}
            background="bg-gray-10"
            className="!w-[300px]"
          />

          <div className="flex-start gap-4">
            {/* filter user role */}
            <MenuDropDown
              options={userRoleOption}
              selectedOption={userRole}
              onClickOption={(value) => dispatch(setUserRole(value))}
              height={"h-12"}
              background="bg-gray-10"
            />
            {/* filter user status */}
            <MenuDropDown
              options={userStatusOption}
              selectedOption={userStatus}
              onClickOption={(value) => dispatch(setUserStatus(value))}
              height={"h-12"}
              background="bg-gray-10"
            />
          </div>
        </div>
      </div>

      {/* Show User list */}
      <div className="flex-col-start w-full gap-4">
        <div className="flex-col-start w-full">
          <h3>User List (8)</h3>
          <p>Account management and user authorization</p>
        </div>

        <UserList />
      </div>

      {isOpenAddUser && (
        <AddUserDialog onClose={() => setIsOpenAddUser(false)} />
      )}
    </div>
  );
}
