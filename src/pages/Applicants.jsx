import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ApplicantsTable from '@/components/organisms/ApplicantsTable';
import ReviewDialog from '@/components/organisms/ReviewDialog';
import ApplicantInfoDialog from '@/components/organisms/ApplicantInfoDialog';

const mockApplicants = [
  { 
    id: 1, 
    name: "John Doe", 
    email: "john@example.com", 
    school: "Sunrise High School",
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
    school: "Evergreen Academy",
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
    school: "Oakwood International School",
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

const questions = [
  "Describe a situation where you demonstrated leadership skills.",
  "How do you handle conflicts within a team?",
  "What do you think are the most important qualities of a leader?",
  "Describe a time when you had to make a difficult decision. How did you approach it?",
  "How do you motivate others to achieve a common goal?"
];

const Applicants = () => {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);
  const [scores, setScores] = useState({});

  const handleReview = (applicant) => {
    setSelectedApplicant(applicant);
    setIsReviewDialogOpen(true);
    setScores({});
  };

  const handleViewInfo = (applicant) => {
    setSelectedApplicant(applicant);
    setIsInfoDialogOpen(true);
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

    setIsReviewDialogOpen(false);
    setScores({});
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <Card className="max-w-6xl mx-auto bg-[#FFFEFA] shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Applicants</CardTitle>
        </CardHeader>
        <CardContent>
          <ApplicantsTable
            applicants={applicants}
            onReview={handleReview}
            onViewInfo={handleViewInfo}
          />
        </CardContent>
      </Card>

      <ReviewDialog
        isOpen={isReviewDialogOpen}
        onOpenChange={setIsReviewDialogOpen}
        applicant={selectedApplicant}
        scores={scores}
        onScoreChange={handleScoreChange}
        onSubmit={handleSubmitReview}
        questions={questions}
        scoringCriteria={scoringCriteria}
      />

      <ApplicantInfoDialog
        isOpen={isInfoDialogOpen}
        onOpenChange={setIsInfoDialogOpen}
        applicant={selectedApplicant}
      />
    </div>
  );
};

export default Applicants;