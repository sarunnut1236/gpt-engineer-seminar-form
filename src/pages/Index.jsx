import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon } from "lucide-react";

const Index = () => {
  const speakers = [
    { name: "Dr. Jane Smith", role: "Leadership Expert" },
    { name: "John Doe", role: "Business Strategist" },
    { name: "Sarah Johnson", role: "Motivational Speaker" },
  ];

  const galleryImages = [
    "https://example.com/seminar-image1.jpg",
    "https://example.com/seminar-image2.jpg",
    "https://example.com/seminar-image3.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-6 text-center">Leadership Seminar 2024</h1>
        <p className="text-xl mb-8 text-center">Join us for an inspiring journey of personal growth and leadership development.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-[#FFFEFA] border-[#D2C8B6]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Seminar Details</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  <span>July 15-17, 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-5 w-5" />
                  <span>Grand Conference Center, Bangkok</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-5 w-5" />
                  <span>Limited to 200 participants</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="mr-2 h-5 w-5" />
                  <span>9:00 AM - 5:00 PM daily</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#FFFEFA] border-[#D2C8B6]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Featured Speakers</h2>
              <ul className="space-y-4">
                {speakers.map((speaker, index) => (
                  <li key={index} className="flex items-center">
                    <UsersIcon className="mr-2 h-5 w-5" />
                    <div>
                      <p className="font-semibold">{speaker.name}</p>
                      <p className="text-sm text-gray-600">{speaker.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Photo Gallery</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <img src={image} alt={`Seminar image ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="flex justify-center space-x-4">
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