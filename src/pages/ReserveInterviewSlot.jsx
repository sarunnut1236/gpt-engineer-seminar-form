import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from 'sonner';

const formSchema = z.object({
  interviewSlots: z.array(z.string()).min(1, { message: 'Please select at least one interview slot' }),
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
      interviewSlots: [],
    },
  });

  const onSubmit = (data) => {
    console.log('Selected interview slots:', data.interviewSlots);
    toast.success('Interview slots reserved successfully!');
    // Simulate saving the data and redirecting
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-md mx-auto bg-[#FFFEFA] shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-[#2C3539]">Reserve Interview Slots</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="interviewSlots"
              render={() => (
                <FormItem>
                  <FormLabel>Select Interview Slots</FormLabel>
                  <div className="space-y-2">
                    {availableSlots.map((slot) => (
                      <FormField
                        key={slot}
                        control={form.control}
                        name="interviewSlots"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={slot}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(slot)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, slot])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== slot
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {slot}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#2C3539] hover:bg-[#4A5459] text-white">
              Reserve Slots
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ReserveInterviewSlot;