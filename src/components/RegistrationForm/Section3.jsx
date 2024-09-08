import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const Section3 = ({ form }) => {
  const aptitudeQuestions = [
    "Describe a situation where you demonstrated leadership skills.",
    "How do you handle conflicts within a team?",
    "What do you think are the most important qualities of a leader?",
    "Describe a time when you had to make a difficult decision. How did you approach it?",
    "How do you motivate others to achieve a common goal?",
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Aptitude Test</h3>
      {aptitudeQuestions.map((question, index) => (
        <FormField
          key={index}
          control={form.control}
          name={`aptitudeQuestion${index + 1}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question {index + 1}: {question}</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Provide a detailed answer..." 
                  className="bg-[#FFFEFA] border-[#D2C8B6]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};

export default Section3;