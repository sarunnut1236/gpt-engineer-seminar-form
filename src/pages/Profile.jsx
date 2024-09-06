import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from "@/components/ui/form";
import Section2 from '@/components/RegistrationForm/Section2';

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
    age: 18,
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

  const form = useForm({
    defaultValues: mockProfileData,
  });

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-4xl mx-auto bg-[#FFFEFA] shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-[#2C3539]">My Profile</h1>
        <Form {...form}>
          <form className="space-y-8">
            <Section2 form={form} />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Profile;