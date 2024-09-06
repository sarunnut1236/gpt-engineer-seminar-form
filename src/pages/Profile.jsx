import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  // In a real application, you would fetch this data from your backend
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
  };

  const renderCard = (title, content) => (
    <Card className="bg-[#FFFEFA] border-[#D2C8B6]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
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
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;