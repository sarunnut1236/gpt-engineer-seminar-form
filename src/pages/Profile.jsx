import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FcGoogle } from 'react-icons/fc';
import ApplicationStatusTimeline from '@/components/ApplicationStatusTimeline';

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
    applicationStatus: 'Pending Interview',
  };

  const renderCard = (title, content) => (
    <Card className="bg-[#FFFEFA] border-[#D2C8B6]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Avatar className="h-24 w-24 mr-6">
            <AvatarImage src={mockProfileData.image} alt={mockProfileData.firstname} />
            <AvatarFallback>{mockProfileData.firstname[0]}{mockProfileData.lastname[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-semibold">{mockProfileData.prefix} {mockProfileData.firstname} {mockProfileData.lastname}</h1>
            <p className="text-xl">{mockProfileData.nickname}</p>
            {mockProfileData.googleConnected && (
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <FcGoogle className="mr-2 h-5 w-5" />
                Connected with Google
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderCard("Application Status", (
            <ApplicationStatusTimeline currentStatus={mockProfileData.applicationStatus} />
          ))}
          
          {renderCard("Personal Information", (
            <div>
              <p><strong>Email:</strong> {mockProfileData.email}</p>
              <p><strong>Province:</strong> {mockProfileData.province}</p>
              <p><strong>School:</strong> {mockProfileData.school}</p>
              <p><strong>Level:</strong> {mockProfileData.level}</p>
              <p><strong>Grade:</strong> {mockProfileData.grade}</p>
              <p><strong>Faculty:</strong> {mockProfileData.faculty}</p>
              <p><strong>Gender:</strong> {mockProfileData.gender}</p>
              <p><strong>Birthday:</strong> {mockProfileData.birthday.toLocaleDateString()}</p>
              <p><strong>Religion:</strong> {mockProfileData.religion}</p>
            </div>
          ))}
          
          {renderCard("Contact Information", (
            <div>
              <p><strong>Line ID:</strong> {mockProfileData.lineId}</p>
              <p><strong>Facebook:</strong> {mockProfileData.facebook}</p>
              <p><strong>Instagram:</strong> {mockProfileData.instagram}</p>
              <p><strong>Telephone:</strong> {mockProfileData.tel}</p>
              <p><strong>Guardian's Telephone:</strong> {mockProfileData.guardianTel}</p>
              <p><strong>Guardian's Relationship:</strong> {mockProfileData.guardianRelationship}</p>
            </div>
          ))}
          
          {renderCard("Medical Information", (
            <div>
              <p><strong>Medical Condition:</strong> {mockProfileData.medicalCondition}</p>
              <p><strong>Personal Medication:</strong> {mockProfileData.personalMedication}</p>
              <p><strong>Food Allergy:</strong> {mockProfileData.foodAllergy}</p>
            </div>
          ))}
          
          {renderCard("Other Information", (
            <div>
              <p><strong>Shirt Size:</strong> {mockProfileData.shirtSize}</p>
              <p><strong>Interview Slot:</strong> {mockProfileData.interviewSlot}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;