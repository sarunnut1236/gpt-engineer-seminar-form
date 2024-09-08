import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const mockApplicants = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Pending Review" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Interviewed" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Pending Review" },
];

const Applicants = () => {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleReview = (applicant) => {
    setSelectedApplicant(applicant);
    setIsDialogOpen(true);
  };

  const handleSubmitReview = () => {
    // In a real application, you would send this data to your backend
    console.log("Submitting review for applicant:", selectedApplicant.id);
    console.log("Score:", score);
    console.log("Feedback:", feedback);

    // Update the applicant's status
    const updatedApplicants = applicants.map(app => 
      app.id === selectedApplicant.id ? {...app, status: "Reviewed"} : app
    );
    setApplicants(updatedApplicants);

    // Close the dialog and reset the form
    setIsDialogOpen(false);
    setScore("");
    setFeedback("");
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Review Applicant: {selectedApplicant?.name}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="score" className="text-right">
                Score
              </Label>
              <Input
                id="score"
                type="number"
                className="col-span-3"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="feedback" className="text-right">
                Feedback
              </Label>
              <Textarea
                id="feedback"
                className="col-span-3"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
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