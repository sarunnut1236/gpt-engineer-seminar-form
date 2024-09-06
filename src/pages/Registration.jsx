import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import Section1 from '@/components/RegistrationForm/Section1';
import Section2 from '@/components/RegistrationForm/Section2';
import Section3 from '@/components/RegistrationForm/Section3';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  acceptTerms: z.boolean().refine((val) => val === true, { message: 'You must accept the terms and conditions' }),
  province: z.string().min(1, { message: 'Province is required' }),
  school: z.string().min(1, { message: 'School is required' }),
  prefix: z.enum(['Mr.', 'Ms.'], { required_error: 'Prefix is required' }),
  firstname: z.string().min(1, { message: 'First name is required' }),
  lastname: z.string().min(1, { message: 'Last name is required' }),
  nickname: z.string().optional(),
  level: z.string().min(1, { message: 'Level is required' }),
  grade: z.string().min(1, { message: 'Grade is required' }),
  faculty: z.string().min(1, { message: 'Faculty is required' }),
  gender: z.enum(['male', 'female', 'lgbtq+'], { required_error: 'Gender is required' }),
  birthday: z.date({ required_error: 'Birthday is required' }),
  religion: z.string().optional(),
  lineId: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  image: z.string().optional(),
  tel: z.string().regex(/^0\d{9}$/, { message: 'Invalid phone number format' }),
  guardianTel: z.string().regex(/^0\d{9}$/, { message: 'Invalid phone number format' }),
  guardianRelationship: z.string().min(1, { message: 'Guardian relationship is required' }),
  medicalCondition: z.string().optional(),
  personalMedication: z.string().optional(),
  foodAllergy: z.string().optional(),
  shirtSize: z.enum(['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'], { required_error: 'Shirt size is required' }),
  aptitudeQuestion1: z.string().min(1, { message: 'Please answer the aptitude question' }),
});

const Registration = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      acceptTerms: false,
      province: '',
      school: '',
      prefix: undefined,
      firstname: '',
      lastname: '',
      nickname: '',
      level: '',
      grade: '',
      faculty: '',
      gender: undefined,
      birthday: undefined,
      religion: '',
      lineId: '',
      facebook: '',
      instagram: '',
      image: '',
      tel: '',
      guardianTel: '',
      guardianRelationship: '',
      medicalCondition: '',
      personalMedication: '',
      foodAllergy: '',
      shirtSize: undefined,
      aptitudeQuestion1: '',
    },
  });

  const onSubmit = (data) => {
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    console.log(form.getValues());
    setShowConfirmation(false);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-4xl mx-auto bg-[#FFFEFA] shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-[#2C3539]">Leadership Seminar Registration</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Section1 form={form} />
            <Section2 form={form} />
            <Section3 form={form} />
            <Button type="submit" className="bg-[#2C3539] hover:bg-[#4A5459] text-white">Submit Registration</Button>
          </form>
        </Form>
      </div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Registration</DialogTitle>
            <DialogDescription>
              Please review your answers before final submission.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            {Object.entries(form.getValues()).map(([key, value]) => (
              <div key={key} className="mb-2">
                <strong>{key}:</strong> {value?.toString()}
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={() => setShowConfirmation(false)}>Edit</Button>
            <Button onClick={handleConfirmSubmit} className="bg-[#2C3539] hover:bg-[#4A5459] text-white">
              Confirm Submission
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Registration;