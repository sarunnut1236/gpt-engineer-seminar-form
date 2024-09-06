import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const Section2 = ({ form }) => {
  const renderFormField = (name, label, placeholder, type = "text") => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} className="bg-[#FFFEFA] border-[#D2C8B6]" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const renderSelectField = (name, label, options) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-[#FFFEFA] border-[#D2C8B6]">
                <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className="space-y-6">
      {renderSelectField("province", "Province", ["Bangkok", "Chiang Mai", "Phuket"])}
      {renderFormField("school", "School", "Enter your school name")}
      {renderSelectField("prefix", "Prefix", ["Mr.", "Ms."])}
      {renderFormField("firstname", "First Name", "Enter your first name")}
      {renderFormField("lastname", "Last Name", "Enter your last name")}
      {renderFormField("nickname", "Nickname", "Enter your nickname (optional)")}
      {renderFormField("level", "Level", "Enter your education level")}
      {renderFormField("grade", "Grade", "Enter your grade")}
      {renderFormField("faculty", "Faculty", "Enter your faculty")}
      {renderSelectField("gender", "Gender", ["male", "female", "lgbtq+"])}
      
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

      {renderFormField("religion", "Religion", "Enter your religion (optional)")}
      {renderFormField("lineId", "Line ID", "Enter your Line ID (optional)")}
      {renderFormField("facebook", "Facebook", "Enter your Facebook profile (optional)")}
      {renderFormField("instagram", "Instagram", "Enter your Instagram handle (optional)")}
      {renderFormField("image", "Profile Image URL", "Enter URL to your profile image (optional)")}
      {renderFormField("tel", "Telephone", "0xxxxxxxxx")}
      {renderFormField("guardianTel", "Guardian's Telephone", "0xxxxxxxxx")}
      {renderFormField("guardianRelationship", "Guardian's Relationship", "e.g., Parent, Sibling")}
      
      <FormField
        control={form.control}
        name="medicalCondition"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Medical Condition</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="Describe any medical conditions (optional)" className="bg-[#FFFEFA] border-[#D2C8B6]" />
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
              <Textarea {...field} placeholder="List any personal medications (optional)" className="bg-[#FFFEFA] border-[#D2C8B6]" />
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
              <Textarea {...field} placeholder="Describe any food allergies (optional)" className="bg-[#FFFEFA] border-[#D2C8B6]" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {renderSelectField("shirtSize", "Shirt Size", ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'])}
    </div>
  );
};

export default Section2;