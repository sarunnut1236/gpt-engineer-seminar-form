import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const mockApplicants = [
  { 
    id: 1, 
    name: "John Doe", 
    email: "john@example.com", 
    status: "Pending Review",
    answers: [
      "I led a team project in school where we had to organize a charity event...",
      "When conflicts arise, I try to listen to all parties involved and find a compromise...",
      "I believe the most important qualities of a leader are integrity, empathy, and vision...",
      "I had to make a difficult decision when choosing between two extracurricular activities...",
      "To motivate others, I try to lead by example and provide positive reinforcement..."
    ]
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    email: "jane@example.com", 
    status: "Interviewed",
    answers: [
      "In my role as class president, I initiated a recycling program...",
      "I handle conflicts by promoting open communication and finding common ground...",
      "The most crucial leadership qualities are adaptability, communication skills, and resilience...",
      "A difficult decision I faced was whether to pursue a summer internship or volunteer abroad...",
      "I motivate others by setting clear goals, providing support, and celebrating achievements..."
    ]
  },
  { 
    id: 3, 
    name: "Bob Johnson", 
    email: "bob@example.com", 
    status: "Pending Review",
    answers: [
      "I demonstrated leadership when I captained my school's debate team...",
      "To resolve conflicts, I encourage team members to express their concerns and work together...",
      "I believe leaders should be visionary, empathetic, and decisive...",
      "I had to make a tough choice between focusing on academics or pursuing a passion project...",
      "I motivate my peers by sharing enthusiasm for our goals and recognizing individual contributions..."
    ]
  },
];

const scoringCriteria = [
  "Consider the applicant's ability to take initiative and guide others towards a common goal.",
  "Evaluate the applicant's approach to problem-solving and ability to find constructive solutions.",
  "Assess the applicant's understanding of leadership qualities and their potential to embody them.",
  "Look for evidence of critical thinking and the ability to weigh pros and cons in decision-making.",
  "Consider the applicant's understanding of team dynamics and ability to inspire others."
];

const Applicants = () => {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scores, setScores] = useState({});

  const handleReview = (applicant) => {
    setSelectedApplicant(applicant);
    setIsDialogOpen(true);
    setScores({});
  };

  const handleScoreChange = (questionIndex, score) => {
    setScores(prevScores => ({
      ...prevScores,
      [questionIndex]: score
    }));
  };

  const handleSubmitReview = () => {
    console.log("Submitting review for applicant:", selectedApplicant.id);
    console.log("Scores:", scores);

    const updatedApplicants = applicants.map(app => 
      app.id === selectedApplicant.id ? {...app, status: "Reviewed"} : app
    );
    setApplicants(updatedApplicants);

    setIsDialogOpen(false);
    setScores({});
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <Card className="max-w-6xl mx-auto bg-[#FFFEFA] shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Applicants</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>{applicant.name}</TableCell>
                  <TableCell>{applicant.email}</TableCell>
                  <TableCell>{applicant.status}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleReview(applicant)}>Review</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Review Applicant: {selectedApplicant?.name}</DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <Accordion type="single" collapsible className="w-full">
              {selectedApplicant?.answers.map((answer, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>Question {index + 1}</AccordionTrigger>
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
                        value={scores[index] || ''}
                        onChange={(e) => handleScoreChange(index, e.target.value)}
                      />
                      <span className="text-sm text-gray-500">(0-10)</span>
                    </div>
                    <div className="mt-2">
                      <Label>Scoring Criteria:</Label>
                      <p className="text-sm text-gray-600 mt-1">{scoringCriteria[index]}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmitReview}>Submit Review</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Applicants;