import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon, BookOpenIcon, AwardIcon } from "lucide-react";

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

  const reviews = [
    { name: "Alex Thompson", role: "Marketing Manager", comment: "This seminar was a game-changer for my career. The insights I gained have been invaluable in my day-to-day work.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
    { name: "Emily Chen", role: "Startup Founder", comment: "The networking opportunities alone were worth it. I've made connections that have helped grow my business exponentially.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
    { name: "Michael Rodriguez", role: "HR Director", comment: "The leadership strategies taught here have transformed how I approach team management. Highly recommended!", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539]">
      {/* Hero Section */}
      <div className="bg-[#2C3539] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center transform hover:scale-105 transition-transform duration-300">Leadership Seminar 2024</h1>
          <p className="text-xl md:text-2xl mb-8 text-center transform hover:-translate-y-1 transition-transform duration-300">Empowering Future Leaders</p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-[#FFFEFA] hover:bg-[#E5E5E0] text-[#2C3539] transform hover:scale-105 transition-transform duration-300">
              <Link to="/registration"><BookOpenIcon className="mr-2 h-4 w-4" /> Register Now</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Seminar Details */}
        <Card className="bg-[#FFFEFA] border-[#D2C8B6] mb-12 transform hover:translate-y-[-5px] transition-transform duration-300">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Seminar Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center"><CalendarIcon className="mr-2 h-5 w-5" /><span>July 15-17, 2024</span></div>
              <div className="flex items-center"><MapPinIcon className="mr-2 h-5 w-5" /><span>Bangkok</span></div>
              <div className="flex items-center"><UsersIcon className="mr-2 h-5 w-5" /><span>200 participants</span></div>
              <div className="flex items-center"><ClockIcon className="mr-2 h-5 w-5" /><span>9:00 AM - 5:00 PM</span></div>
            </div>
          </CardContent>
        </Card>
        
        {/* Featured Speakers */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <Card key={index} className="bg-[#FFFEFA] border-[#D2C8B6] transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex flex-col items-center">
                <img src={speaker.image} alt={speaker.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-semibold">{speaker.name}</h3>
                <p className="text-[#4A5459]">{speaker.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Photo Gallery */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Photo Gallery</h2>
        <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mb-12">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img src={image} alt={`Seminar image ${index + 1}`} className="w-full h-48 sm:h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        {/* Reviews Section */}
        <h2 className="text-2xl font-semibold mb-6 text-center">What Our Participants Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-[#FFFEFA] border-[#D2C8B6] transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex flex-col items-center">
                <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
                <p className="text-center mb-4 italic">"{review.comment}"</p>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-[#4A5459]">{review.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center transform hover:translate-y-[-5px] transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Leadership Skills?</h2>
          <p className="text-lg mb-6">Join us for an unforgettable experience of growth and inspiration.</p>
          <Button asChild className="bg-[#2C3539] hover:bg-[#4A5459] text-white text-lg px-8 py-3">
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