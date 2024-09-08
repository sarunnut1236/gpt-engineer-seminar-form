import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';
import { CalendarIcon, ClockIcon, UserIcon } from 'lucide-react';

const formSchema = z.object({
  interviewDay: z.string().min(1, { message: 'Please select an interview day' }),
  interviewSlots: z.array(z.string()).min(1, { message: 'Please select at least one interview slot' }),
});

const ReserveInterviewSlot = () => {
  const navigate = useNavigate();
  const [availableDays] = useState(["2024-07-18", "2024-07-19", "2024-07-20"]);
  const [availableSlots, setAvailableSlots] = useState([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interviewDay: '',
      interviewSlots: [],
    },
  });

  const onSubmit = (data) => {
    console.log('Selected interview day and slots:', data);
    toast.success('Interview slots reserved successfully!');
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  const handleDayChange = (selectedDay) => {
    form.setValue('interviewDay', selectedDay);
    form.setValue('interviewSlots', []);
    // Mock available slots for the selected day
    const mockSlots = [
      `${selectedDay} 09:00 AM`,
      `${selectedDay} 10:00 AM`,
      `${selectedDay} 11:00 AM`,
      `${selectedDay} 02:00 PM`,
      `${selectedDay} 03:00 PM`,
    ];
    setAvailableSlots(mockSlots);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-md mx-auto">
        <Card className="bg-[#FFFEFA] shadow-lg rounded-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-[#2C3539] flex items-center">
              <CalendarIcon className="mr-2" /> Reserve Interview Slots
            </CardTitle>
            <CardDescription>Select your preferred interview day and time slots</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="interviewDay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Interview Day</FormLabel>
                      <Select onValueChange={(value) => handleDayChange(value)} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a day" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {availableDays.map((day) => (
                            <SelectItem key={day} value={day}>{day}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {availableSlots.length > 0 && (
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
                                      <ClockIcon className="inline-block mr-2 h-4 w-4" />
                                      {slot.split(' ')[1]} {slot.split(' ')[2]}
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
                )}
                <Button type="submit" className="bg-[#2C3539] hover:bg-[#4A5459] text-white w-full">
                  Reserve Slots
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <Card className="bg-[#FFFEFA] shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-[#2C3539] flex items-center">
              <UserIcon className="mr-2" /> Interview Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Select your preferred interview day from the available options.</li>
              <li>Choose one or more time slots that suit your schedule.</li>
              <li>Submit your selection to reserve your interview slots.</li>
              <li>Prepare for your interview by reviewing the seminar topics and your application.</li>
              <li>Attend the interview at the scheduled time, either in-person or via video call as specified.</li>
            </ol>
            <p className="mt-4 text-sm text-[#4A5459]">
              Note: You may select multiple slots to increase your chances of securing an interview time that works best for you. The final slot will be confirmed by our team.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReserveInterviewSlot;