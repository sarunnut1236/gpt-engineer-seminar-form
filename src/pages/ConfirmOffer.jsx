import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';
import { Upload, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  paymentAmount: z.string().min(1, { message: 'Payment amount is required' }),
  paymentDate: z.string().min(1, { message: 'Payment date is required' }),
  paySlip: z.instanceof(File).refine((file) => file.size <= 5000000, {
    message: 'File size should be less than 5MB',
  }),
});

const ConfirmOffer = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentAmount: '',
      paymentDate: '',
      paySlip: null,
    },
  });

  const onSubmit = (data) => {
    console.log('Offer confirmation data:', data);
    // Here you would typically send the data to your backend
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
      <div className="max-w-md mx-auto">
        <Card className="bg-[#FFFEFA] shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Confirm Your Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="paymentAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Amount (THB)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="5000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paymentDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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