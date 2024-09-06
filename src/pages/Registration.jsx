import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

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
  age: z.number().min(1, { message: 'Age is required' }),
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
});

const Registration = () => {
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
      age: undefined,
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
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <div className="max-w-4xl mx-auto bg-[#FFFEFA] shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-[#2C3539]">Leadership Seminar Registration</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Accept terms and conditions</FormLabel>
                    <FormDescription>
                      You agree to our Terms of Service and Privacy Policy.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Province</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="prefix"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prefix</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#FFFEFA] border-[#D2C8B6]">
                        <SelectValue placeholder="Select a prefix" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Mr.">Mr.</SelectItem>
                      <SelectItem value="Ms.">Ms.</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nickname</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="faculty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Faculty</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#FFFEFA] border-[#D2C8B6]">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="lgbtq+">LGBTQ+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Birthday</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Religion</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lineId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Line ID</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telephone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="0xxxxxxxxx" className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guardianTel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian's Telephone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="0xxxxxxxxx" className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guardianRelationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian's Relationship</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="medicalCondition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medical Condition</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="personalMedication"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personal Medication</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="foodAllergy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food Allergy</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shirtSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shirt Size</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#FFFEFA] border-[#D2C8B6]">
                        <SelectValue placeholder="Select shirt size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="bg-[#2C3539] hover:bg-[#4A5459] text-white">Submit Registration</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Registration;