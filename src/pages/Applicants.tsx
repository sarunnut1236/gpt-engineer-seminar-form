import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ApplicantsTable from '@/components/organisms/ApplicantsTable';
import ReviewDialog from '@/components/organisms/ReviewDialog';
import ApplicantInfoDialog from '@/components/organisms/ApplicantInfoDialog';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { EyeIcon, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import StatusIcon from '@/components/atoms/StatusIcon';

interface Applicant {
  id: number;
  name: string;
  email: string;
  school: string;
  status: string;
  answers: string[];
  province: string;
  level: string;
  grade: string;
  gender: string;
  birthday: string;
  tel: string;
  guardianTel: string;
}

const mockApplicants: Applicant[] = [
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

const ApplicantCard: React.FC<{
  applicant: Applicant;
  onReview: (applicant: Applicant) => void;
  onViewInfo: (applicant: Applicant) => void;
  onUpdateStatus: (applicant: Applicant, status: string) => void;
}> = ({ applicant, onReview, onViewInfo, onUpdateStatus }) => (
  <Card className="mb-4">
    <CardContent className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{applicant.name}</h3>
        <StatusIcon status={applicant.status} />
      </div>
      <p className="text-sm mb-2">{applicant.email}</p>
      <p className="text-sm mb-2">{applicant.school}</p>
      <div className="flex justify-between items-center mt-4">
        <Button onClick={() => onReview(applicant)} size="sm">Review</Button>
        <Button onClick={() => onViewInfo(applicant)} variant="outline" size="sm">
          <EyeIcon className="h-4 w-4 mr-2" /> View Info
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onUpdateStatus(applicant, "Pending Interview")}>
              Set to Pending Interview
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onUpdateStatus(applicant, "Interviewed")}>
              Set to Interviewed
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onUpdateStatus(applicant, "Pending Confirmation")}>
              Set to Pending Confirmation
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onUpdateStatus(applicant, "Accepted")}>
              Set to Accepted
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardContent>
  </Card>
);

const ApplicantsPage: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>(mockApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);
  const [scores, setScores] = useState<{ [key: number]: string }>({});
  const [activeTab, setActiveTab] = useState("all");

  const handleReview = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setIsReviewDialogOpen(true);
    setScores({});
  };

  const handleViewInfo = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setIsInfoDialogOpen(true);
  };

  const handleScoreChange = (questionIndex: number, score: string) => {
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
      app.id === selectedApplicant?.id ? {...app, status: newStatus} : app
    );
    setApplicants(updatedApplicants);

    toast.success(`Review submitted. Applicant status updated to: ${newStatus}`);
    setIsReviewDialogOpen(false);
    setScores({});
  };

  const handleUpdateStatus = (applicant: Applicant, newStatus: string) => {
    const updatedApplicants = applicants.map(app => 
      app.id === applicant.id ? {...app, status: newStatus} : app
    );
    setApplicants(updatedApplicants);
    toast.success(`Applicant status updated to: ${newStatus}`);
  };

  const filterApplicantsByStatus = (status: string): Applicant[] => {
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
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="hidden md:flex">
              <TabsTrigger value="all">All Applicants</TabsTrigger>
              <TabsTrigger value="pending">Pending Review</TabsTrigger>
              <TabsTrigger value="interviewed">Interview Process</TabsTrigger>
              <TabsTrigger value="confirmed">Confirmation Process</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab}>
              <div className="md:hidden">
                {filterApplicantsByStatus(activeTab).map(applicant => (
                  <ApplicantCard
                    key={applicant.id}
                    applicant={applicant}
                    onReview={handleReview}
                    onViewInfo={handleViewInfo}
                    onUpdateStatus={handleUpdateStatus}
                  />
                ))}
              </div>
              <div className="hidden md:block">
                <ApplicantsTable
                  applicants={filterApplicantsByStatus(activeTab)}
                  onReview={handleReview}
                  onViewInfo={handleViewInfo}
                  onUpdateStatus={handleUpdateStatus}
                />
              </div>
            </TabsContent>
          </Tabs>
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