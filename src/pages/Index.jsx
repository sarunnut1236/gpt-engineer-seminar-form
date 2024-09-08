import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon, QuoteIcon, BookOpenIcon, AwardIcon, LightbulbIcon, UserIcon } from "lucide-react";

const Index = () => {
  const speakers = [
    { name: "Dr. Jane Smith", role: "Leadership Expert", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
    { name: "John Doe", role: "Business Strategist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
    { name: "Sarah Johnson", role: "Motivational Speaker", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539]">
      {/* Hero Section */}
      <div className="bg-[#2C3539] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Leadership Seminar 2024</h1>
          <p className="text-xl md:text-2xl mb-8 text-center">Empowering Future Leaders</p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-[#FFFEFA] hover:bg-[#E5E5E0] text-[#2C3539]">
              <Link to="/registration"><BookOpenIcon className="mr-2 h-4 w-4" /> Register Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#FFFEFA] text-[#FFFEFA] hover:bg-[#4A5459] hover:text-white">
              <Link to="/profile"><UserIcon className="mr-2 h-4 w-4" /> My Profile</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Seminar Details */}
        <Card className="bg-[#FFFEFA] border-[#D2C8B6] mb-12">
          <CardContent className="p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">Seminar Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-6 w-6" />
                  <span className="text-lg">July 15-17, 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-6 w-6" />
                  <span className="text-lg">Grand Conference Center, Bangkok</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-6 w-6" />
                  <span className="text-lg">Limited to 200 participants</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="mr-2 h-6 w-6" />
                  <span className="text-lg">9:00 AM - 5:00 PM daily</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Featured Speakers */}
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <Card key={index} className="bg-[#FFFEFA] border-[#D2C8B6]">
              <CardContent className="p-6 flex flex-col items-center">
                <img src={speaker.image} alt={speaker.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-semibold">{speaker.name}</h3>
                <p className="text-[#4A5459]">{speaker.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Quote Section */}
        <div className="bg-[#2C3539] text-white p-8 rounded-lg mb-12">
          <QuoteIcon className="h-12 w-12 mb-4 mx-auto" />
          <blockquote className="text-2xl text-center italic mb-4">
            "Leadership is not about being in charge. It's about taking care of those in your charge."
          </blockquote>
          <p className="text-right">- Simon Sinek</p>
        </div>
        
        {/* Photo Gallery */}
        <h2 className="text-3xl font-semibold mb-6 text-center">Photo Gallery</h2>
        <Carousel className="w-[80%] max-w-4xl mx-auto mb-12">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img src={image} alt={`Seminar image ${index + 1}`} className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Leadership Skills?</h2>
          <p className="text-xl mb-6">Join us for an unforgettable experience of growth and inspiration.</p>
          <Button asChild className="bg-[#2C3539] hover:bg-[#4A5459] text-white text-lg px-8 py-3">
            <Link to="/registration">
              <AwardIcon className="mr-2 h-5 w-5" /> Register Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;