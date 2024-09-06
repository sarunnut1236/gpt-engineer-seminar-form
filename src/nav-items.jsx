import { HomeIcon, ClipboardListIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Registration from "./pages/Registration.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
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
];