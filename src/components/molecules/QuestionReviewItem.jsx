import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const QuestionReviewItem = ({ index, question, answer, score, onScoreChange, criteria }) => (
  <AccordionItem value={`item-${index}`}>
    <AccordionTrigger>Question {index + 1}: {question}</AccordionTrigger>
    <AccordionContent>
      <p className="mb-2">{answer}</p>
      <div className="flex items-center space-x-2">
        <Label htmlFor={`score-${index}`}>Score:</Label>
        <Input
          id={`score-${index}`}
          type="number"
          min="0"
          max="10"
          className="w-20"
          value={score || ''}
          onChange={(e) => onScoreChange(index, e.target.value)}
        />
        <span className="text-sm text-gray-500">(0-10)</span>
      </div>
      <div className="mt-2">
        <Label>Scoring Criteria:</Label>
        <p className="text-sm text-gray-600 mt-1">{criteria}</p>
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default QuestionReviewItem;