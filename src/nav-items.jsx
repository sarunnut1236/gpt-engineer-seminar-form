import { HomeIcon, ClipboardListIcon, UserIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Registration from "./pages/Registration.jsx";
import Profile from "./pages/Profile.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Registration",
    to: "/registration",
    icon: <ClipboardListIcon className="h-4 w-4" />,
    page: <Registration />,
  },
  {
    title: "My Profile",
    to: "/profile",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Profile />,
  },
];