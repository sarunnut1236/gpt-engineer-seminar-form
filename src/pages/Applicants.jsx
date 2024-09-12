import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ApplicantsTable from '@/components/organisms/ApplicantsTable';
import ReviewDialog from '@/components/organisms/ReviewDialog';
import ApplicantInfoDialog from '@/components/organisms/ApplicantInfoDialog';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

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
    ],
    province: "Bangkok",
    level: "High School",
    grade: "12",
    gender: "Male",
    birthday: "2005-05-15",
    tel: "0812345678",
    guardianTel: "0898765432",
  },
  // ... (other applicants with similar detailed information)
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

const ApplicantsPage = () => {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);
  const [scores, setScores] = useState({});
  const [activeTab, setActiveTab] = useState("all");

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
    const totalScore = Object.values(scores).reduce((sum, score) => sum + parseInt(score), 0);
    const averageScore = totalScore / Object.keys(scores).length;

    let newStatus;
    if (averageScore >= 8) {
      newStatus = "Round #1 Pass";
    } else if (averageScore >= 6) {
      newStatus = "Pending Interview";
    } else {
      newStatus = "Rejected";
    }

    const updatedApplicants = applicants.map(app => 
      app.id === selectedApplicant.id ? {...app, status: newStatus} : app
    );
    setApplicants(updatedApplicants);

    toast.success(`Review submitted. Applicant status updated to: ${newStatus}`);
    setIsReviewDialogOpen(false);
    setScores({});
  };

  const handleUpdateStatus = (applicant, newStatus) => {
    const updatedApplicants = applicants.map(app => 
      app.id === applicant.id ? {...app, status: newStatus} : app
    );
    setApplicants(updatedApplicants);
    toast.success(`Applicant status updated to: ${newStatus}`);
  };

  const filterApplicantsByStatus = (status) => {
    switch (status) {
      case 'pending':
        return applicants.filter(app => app.status === "Pending Review");
      case 'interviewed':
        return applicants.filter(app => app.status === "Interviewed" || app.status === "Pending Interview");
      case 'confirmed':
        return applicants.filter(app => app.status === "Pending Confirmation" || app.status === "Accepted");
      case 'rejected':
        return applicants.filter(app => app.status === "Rejected");
      default:
        return applicants;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <Card className="max-w-6xl mx-auto bg-[#FFFEFA] shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Applicants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="md:hidden mb-4">
            <Select onValueChange={(value) => setActiveTab(value)} defaultValue={activeTab}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applicants</SelectItem>
                <SelectItem value="pending">Pending Review</SelectItem>
                <SelectItem value="interviewed">Interview Process</SelectItem>
                <SelectItem value="confirmed">Confirmation Process</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="hidden md:block">
            <TabsList>
              <TabsTrigger value="all">All Applicants</TabsTrigger>
              <TabsTrigger value="pending">Pending Review</TabsTrigger>
              <TabsTrigger value="interviewed">Interview Process</TabsTrigger>
              <TabsTrigger value="confirmed">Confirmation Process</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
          </Tabs>
          <TabsContent value={activeTab}>
            <ApplicantsTable
              applicants={filterApplicantsByStatus(activeTab)}
              onReview={handleReview}
              onViewInfo={handleViewInfo}
              onUpdateStatus={handleUpdateStatus}
            />
          </TabsContent>
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

export default ApplicantsPage;