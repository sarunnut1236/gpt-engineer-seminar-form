import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from '@/nav-items';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="bg-[#FFFEFA] border-b border-[#D2C8B6] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-[#2C3539]">Leadership Seminar</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Button key={item.to} variant="ghost" asChild>
              <Link to={item.to} className="text-[#2C3539] hover:text-[#4A5459]">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            </Button>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <SheetHeader className="p-4 border-b border-[#D2C8B6]">
              <SheetTitle className="text-left">Menu</SheetTitle>
              <Button 
                variant="ghost" 
                className="absolute right-4 top-4" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </SheetHeader>
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center text-[#2C3539] hover:text-[#4A5459] py-2 ${
                    location.pathname === item.to ? 'font-semibold' : ''
                  }`}
                  onClick={closeSheet}
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;