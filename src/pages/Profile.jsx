import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FcGoogle } from 'react-icons/fc';
import ApplicationStatusTimeline from '@/components/ApplicationStatusTimeline';

const ProfileInfo = ({ label, value }) => (
  <div className="mb-2">
    <span className="font-semibold">{label}:</span> {value}
  </div>
);

const Profile = () => {
  const mockProfileData = {
    email: 'johndoe@example.com',
    province: 'Bangkok',
    school: 'Example High School',
    prefix: 'Mr.',
    firstname: 'John',
    lastname: 'Doe',
    nickname: 'Johnny',
    level: 'High School',
    grade: '12',
    faculty: 'Science',
    gender: 'male',
    birthday: new Date('2005-01-01'),
    religion: 'Buddhism',
    lineId: 'johndoe123',
    facebook: 'john.doe',
    instagram: '@johndoe',
    image: 'https://example.com/johndoe.jpg',
    tel: '0812345678',
    guardianTel: '0887654321',
    guardianRelationship: 'Parent',
    medicalCondition: 'None',
    personalMedication: 'None',
    foodAllergy: 'Peanuts',
    shirtSize: 'M',
    interviewSlot: '2024-07-18 10:00 AM',
    googleConnected: true,
    applicationStatus: 'Interview Scheduled',
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#FFFEFA] border-[#D2C8B6] col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Avatar className="h-20 w-20 mr-6">
                  <AvatarImage src={mockProfileData.image} alt={mockProfileData.firstname} />
                  <AvatarFallback>{mockProfileData.firstname[0]}{mockProfileData.lastname[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-semibold">{mockProfileData.prefix} {mockProfileData.firstname} {mockProfileData.lastname}</h1>
                  <p className="text-lg">{mockProfileData.nickname}</p>
                  {mockProfileData.googleConnected && (
                    <div className="flex items-center mt-1 text-sm text-gray-600">
                      <FcGoogle className="mr-2 h-4 w-4" />
                      Connected with Google
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#FFFEFA] border-[#D2C8B6] col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Application Status</h2>
              <p className="text-lg font-medium mb-2">Current Status: <span className="text-blue-600">{mockProfileData.applicationStatus}</span></p>
              <ApplicationStatusTimeline currentStatus={mockProfileData.applicationStatus} />
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#FFFEFA] border-[#D2C8B6]">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <ProfileInfo label="Email" value={mockProfileData.email} />
              <ProfileInfo label="Province" value={mockProfileData.province} />
              <ProfileInfo label="School" value={mockProfileData.school} />
              <ProfileInfo label="Level" value={mockProfileData.level} />
              <ProfileInfo label="Grade" value={mockProfileData.grade} />
              <ProfileInfo label="Faculty" value={mockProfileData.faculty} />
              <ProfileInfo label="Gender" value={mockProfileData.gender} />
              <ProfileInfo label="Birthday" value={mockProfileData.birthday.toLocaleDateString()} />
              <ProfileInfo label="Religion" value={mockProfileData.religion} />
            </CardContent>
          </Card>
          
          <Card className="bg-[#FFFEFA] border-[#D2C8B6]">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <ProfileInfo label="Line ID" value={mockProfileData.lineId} />
              <ProfileInfo label="Facebook" value={mockProfileData.facebook} />
              <ProfileInfo label="Instagram" value={mockProfileData.instagram} />
              <ProfileInfo label="Telephone" value={mockProfileData.tel} />
              <ProfileInfo label="Guardian's Telephone" value={mockProfileData.guardianTel} />
              <ProfileInfo label="Guardian's Relationship" value={mockProfileData.guardianRelationship} />
            </CardContent>
          </Card>
          
          <Card className="bg-[#FFFEFA] border-[#D2C8B6]">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
              <ProfileInfo label="Medical Condition" value={mockProfileData.medicalCondition} />
              <ProfileInfo label="Personal Medication" value={mockProfileData.personalMedication} />
              <ProfileInfo label="Food Allergy" value={mockProfileData.foodAllergy} />
            </CardContent>
          </Card>
          
          <Card className="bg-[#FFFEFA] border-[#D2C8B6]">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Other Information</h2>
              <ProfileInfo label="Shirt Size" value={mockProfileData.shirtSize} />
              <ProfileInfo label="Interview Slot" value={mockProfileData.interviewSlot} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;