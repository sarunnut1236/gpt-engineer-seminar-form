import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F0] text-[#2C3539]">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Leadership Seminar</h1>
        <p className="text-xl mb-8">Join us for an inspiring journey of personal growth and leadership development.</p>
        <div className="space-x-4">
          <Button asChild className="bg-[#2C3539] hover:bg-[#4A5459] text-white">
            <Link to="/registration">Register Now</Link>
          </Button>
          <Button asChild variant="outline" className="border-[#2C3539] text-[#2C3539] hover:bg-[#E5E5E0]">
            <Link to="/profile">My Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;