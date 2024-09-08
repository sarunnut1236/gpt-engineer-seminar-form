import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from '@/nav-items';

const Navbar = () => {
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center text-[#2C3539] hover:text-[#4A5459] py-2"
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