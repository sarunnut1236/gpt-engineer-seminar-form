import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import QuestionReviewItem from '@/components/molecules/QuestionReviewItem';

const ReviewDialog = ({ isOpen, onOpenChange, applicant, scores, onScoreChange, onSubmit, questions, scoringCriteria }) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle>Review Applicant: {applicant?.name}</DialogTitle>
      </DialogHeader>
      <div className="max-h-[60vh] overflow-y-auto">
        <Accordion type="single" collapsible className="w-full">
          {applicant?.answers.map((answer, index) => (
            <QuestionReviewItem
              key={index}
              index={index}
              question={questions[index]}
              answer={answer}
              score={scores[index]}
              onScoreChange={onScoreChange}
              criteria={scoringCriteria[index]}
            />
          ))}
        </Accordion>
      </div>
      <DialogFooter>
        <Button onClick={onSubmit}>Submit Review</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default ReviewDialog;