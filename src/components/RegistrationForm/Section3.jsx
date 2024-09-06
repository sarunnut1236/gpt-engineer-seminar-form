import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const Section3 = ({ form }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Aptitude Test</h3>
      <FormField
        control={form.control}
        name="aptitudeQuestion1"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Question 1: Describe a situation where you demonstrated leadership skills.</FormLabel>
            <FormControl>
              <Textarea 
                {...field} 
                placeholder="Provide a detailed example of a time when you took on a leadership role..." 
                className="bg-[#FFFEFA] border-[#D2C8B6]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Section3;