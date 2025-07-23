import { List, User, UserCog, ShieldCheck, Lock, Unlock } from "lucide-react";

export const userRoleOption = [
  {
    label: "All Roles",
    icon: <List size={18} strokeWidth={2} />,
  },
  {
    label: "Customer",
    icon: <User size={18} strokeWidth={2} />,
  },
  {
    label: "Staff",
    icon: <UserCog size={18} strokeWidth={2} />,
  },
  {
    label: "Admin",
    icon: <ShieldCheck size={18} strokeWidth={2} />,
  },
];

export const userStatusOption = [
  {
    label: "All Status",
    icon: <List size={18} strokeWidth={2} />,
  },
  {
    label: "Active",
    icon: <Unlock size={18} strokeWidth={2} />,
  },
  {
    label: "Blocked",
    icon: <Lock size={18} strokeWidth={2} />,
  },
];
