import { ReactNode } from 'react';
import { HomeIcon, ClipboardListIcon, UserIcon, CalendarIcon, UsersIcon, LogInIcon, CheckSquareIcon, ClipboardIcon } from "lucide-react";
import Index from "./pages/Index";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import ReserveInterviewSlot from "./pages/ReserveInterviewSlot";
import Applicants from "./pages/Applicants";
import Login from "./pages/Login";
import ConfirmOffer from "./pages/ConfirmOffer";
import Registrar from "./pages/Registrar";

interface NavItem {
  title: string;
  to: string;
  icon: ReactNode;
  page: ReactNode;
  staffOnly?: boolean;
}

export const navItems: NavItem[] = [
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
  {
    title: "Login",
    to: "/login",
    icon: <LogInIcon className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Confirm Offer",
    to: "/confirm-offer",
    icon: <CheckSquareIcon className="h-4 w-4" />,
    page: <ConfirmOffer />,
  },
  {
    title: "Registrar",
    to: "/registrar",
    icon: <ClipboardIcon className="h-4 w-4" />,
    page: <Registrar />,
    staffOnly: true,
  },
];