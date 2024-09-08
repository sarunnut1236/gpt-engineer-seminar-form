import { HomeIcon, ClipboardListIcon, UserIcon, CalendarIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Registration from "./pages/Registration.jsx";
import Profile from "./pages/Profile.jsx";
import ReserveInterviewSlot from "./pages/ReserveInterviewSlot.jsx";
import Applicants from "./pages/Applicants.jsx";

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
    title: "Reserve Interview",
    to: "/reserve-interview",
    icon: <CalendarIcon className="h-4 w-4" />,
    page: <ReserveInterviewSlot />,
  },
  {
    title: "My Profile",
    to: "/profile",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Profile />,
  },
  {
    title: "Applicants",
    to: "/applicants",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Applicants />,
    staffOnly: true,
  },
];