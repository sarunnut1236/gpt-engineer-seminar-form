import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from 'sonner';
import { Upload, CheckCircle2, CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react';

const formSchema = z.object({
  paySlip: z.instanceof(File).refine((file) => file.size <= 5000000, {
    message: 'File size should be less than 5MB',
  }),
  acceptPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must accept the seminar policy',
  }),
});

const ConfirmOffer = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paySlip: null,
      acceptPolicy: false,
    },
  });

  const onSubmit = (data) => {
    console.log('Offer confirmation data:', data);
    toast.success('Offer confirmed successfully!');
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/profile');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
        <Card className="w-[350px] bg-[#FFFEFA]">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Offer Confirmed</h2>
              <p className="text-[#4A5459]">Your offer has been confirmed. We look forward to seeing you at the Leadership Seminar!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-[#FFFEFA] shadow-lg rounded-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Confirm Your Offer</CardTitle>
            <CardDescription>Please review the seminar details and confirm your participation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Seminar Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5 text-[#2C3539]" />
                  <span>July 15-17, 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-5 w-5 text-[#2C3539]" />
                  <span>Grand Conference Center, Bangkok</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-5 w-5 text-[#2C3539]" />
                  <span>200 Participants</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
              <p>Seminar Fee: 5,000 THB</p>
              <p>Payment Method: Bank Transfer</p>
              <p>Account Name: Leadership Seminar Co., Ltd.</p>
              <p>Account Number: 123-4-56789-0</p>
              <p>Bank: Example Bank</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="paySlip"
                  render={({ field: { onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Upload Pay Slip</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => onChange(e.target.files[0])}
                          {...rest}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="acceptPolicy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I accept the seminar policy and terms
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-[#2C3539] hover:bg-[#4A5459] text-white">
                  <Upload className="mr-2 h-4 w-4" /> Confirm and Upload
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmOffer;