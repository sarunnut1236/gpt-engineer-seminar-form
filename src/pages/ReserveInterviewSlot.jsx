import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';

const formSchema = z.object({
  interviewSlot: z.string().min(1, { message: 'Please select an interview slot' }),
});

const ReserveInterviewSlot = () => {
  const navigate = useNavigate();
  const [availableSlots] = useState([
    "2024-07-18 09:00 AM",
    "2024-07-18 10:00 AM",
    "2024-07-18 11:00 AM",
    "2024-07-18 02:00 PM",
    "2024-07-18 03:00 PM",
    "2024-07-19 09:00 AM",
    "2024-07-19 10:00 AM",
    "2024-07-19 11:00 AM",
  ]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interviewSlot: '',
    },
  });

  const onSubmit = (data) => {
    // In a real application, you would send this data to your backend
    console.log('Selected interview slot:', data.interviewSlot);
    toast.success('Interview slot reserved successfully!');
    // Simulate saving the data and redirecting
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-md mx-auto bg-[#FFFEFA] shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-[#2C3539]">Reserve Interview Slot</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="interviewSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Interview Slot</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#FFFEFA] border-[#D2C8B6]">
                        <SelectValue placeholder="Choose a slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#2C3539] hover:bg-[#4A5459] text-white">
              Reserve Slot
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ReserveInterviewSlot;