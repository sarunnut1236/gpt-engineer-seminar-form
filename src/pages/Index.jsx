import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon, BookOpenIcon, AwardIcon } from "lucide-react";

const Index = () => {
  const speakers = [
    { name: "Dr. Jane Smith", role: "Leadership Expert", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
    { name: "John Doe", role: "Business Strategist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
    { name: "Sarah Johnson", role: "Motivational Speaker", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Leadership Seminar 2024</h1>
          <p className="text-xl md:text-2xl mb-8 text-center text-[#666666]">Empowering Future Leaders</p>
          <div className="flex justify-center">
            <Button asChild className="bg-[#007AFF] hover:bg-[#0056B3] text-white">
              <Link to="/registration"><BookOpenIcon className="mr-2 h-4 w-4" /> Register Now</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Seminar Details */}
        <Card className="bg-white mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Seminar Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center"><CalendarIcon className="mr-2 h-5 w-5 text-[#007AFF]" /><span>July 15-17, 2024</span></div>
              <div className="flex items-center"><MapPinIcon className="mr-2 h-5 w-5 text-[#007AFF]" /><span>Bangkok</span></div>
              <div className="flex items-center"><UsersIcon className="mr-2 h-5 w-5 text-[#007AFF]" /><span>200 participants</span></div>
              <div className="flex items-center"><ClockIcon className="mr-2 h-5 w-5 text-[#007AFF]" /><span>9:00 AM - 5:00 PM</span></div>
            </div>
          </CardContent>
        </Card>
        
        {/* Featured Speakers */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <img src={speaker.image} alt={speaker.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-semibold">{speaker.name}</h3>
                <p className="text-[#666666]">{speaker.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Leadership Skills?</h2>
          <p className="text-lg mb-6 text-[#666666]">Join us for an unforgettable experience of growth and inspiration.</p>
          <Button asChild className="bg-[#007AFF] hover:bg-[#0056B3] text-white text-lg px-8 py-3">
            <Link to="/registration">
              <AwardIcon className="mr-2 h-5 w-4" /> Register Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;