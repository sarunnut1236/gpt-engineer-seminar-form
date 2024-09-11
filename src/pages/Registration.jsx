import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import Section1 from '@/components/RegistrationForm/Section1';
import Section2 from '@/components/RegistrationForm/Section2';
import Section3 from '@/components/RegistrationForm/Section3';
import { CheckCircle2, Save } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  // ... (keep all other form fields as they were)
  image: z.any().optional(), // Change this to accept any value for now
});

const SuccessModal = ({ isOpen, onClose, onRedirect }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
          Registration Successful
        </DialogTitle>
        <DialogDescription>
          Your registration for the Leadership Seminar has been submitted successfully.
        </DialogDescription>
      </DialogHeader>
      <p>We look forward to seeing you at the event!</p>
      <DialogFooter>
        <Button onClick={onRedirect} className="bg-[#2C3539] hover:bg-[#4A5459] text-white">View Profile</Button>
      </DialogFooter>
      <DialogClose />
    </DialogContent>
  </Dialog>
);

const RegistrationSubmitted = () => (
  <div className="text-center py-8">
    <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
    <h2 className="text-2xl font-semibold mb-2">Registration Submitted</h2>
    <p className="text-[#4A5459]">Your registration has been successfully submitted. Thank you for your interest in the Leadership Seminar!</p>
  </div>
);

const Registration = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // ... (keep all other default values as they were)
      image: null,
    },
  });

  const onSubmit = (data) => {
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    console.log(form.getValues());
    setShowConfirmation(false);
    setShowSuccess(true);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  const handleRedirectToProfile = () => {
    setShowSuccess(false);
    navigate('/profile');
  };

  const handleSave = () => {
    const currentData = form.getValues();
    // Here you would save the current form data, e.g., to localStorage or to a backend
    localStorage.setItem('registrationFormData', JSON.stringify(currentData));
    toast({
      title: "Progress Saved",
      description: "Your registration progress has been saved.",
      duration: 3000,
    });
  };

  if (isSubmitted) {
    return <RegistrationSubmitted />;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-4xl mx-auto bg-[#FFFEFA] shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-[#2C3539]">Leadership Seminar Registration</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Section1 form={form} />
            <Section2 form={form} />
            <Section3 form={form} />
            <div className="flex justify-between">
              <Button type="button" onClick={handleSave} className="bg-[#4A5459] hover:bg-[#2C3539] text-white">
                <Save className="mr-2 h-4 w-4" /> Save Progress
              </Button>
              <Button type="submit" className="bg-[#2C3539] hover:bg-[#4A5459] text-white">Submit Registration</Button>
            </div>
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
                <strong>{key}:</strong> {value instanceof File ? value.name : value?.toString()}
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

      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        onRedirect={handleRedirectToProfile}
      />
    </div>
  );
};

export default Registration;