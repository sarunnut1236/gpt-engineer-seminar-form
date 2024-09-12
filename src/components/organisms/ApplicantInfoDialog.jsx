import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ApplicantInfoItem from '@/components/atoms/ApplicantInfoItem';

const ApplicantInfoDialog = ({ isOpen, onOpenChange, applicant }) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Applicant Information: {applicant?.name}</DialogTitle>
      </DialogHeader>
      <div className="max-h-[60vh] overflow-y-auto">
        <ApplicantInfoItem label="Email" value={applicant?.email} />
        <ApplicantInfoItem label="School" value={applicant?.school} />
        <ApplicantInfoItem label="Status" value={applicant?.status} />
        <ApplicantInfoItem label="Province" value={applicant?.province} />
        <ApplicantInfoItem label="Level" value={applicant?.level} />
        <ApplicantInfoItem label="Grade" value={applicant?.grade} />
        <ApplicantInfoItem label="Gender" value={applicant?.gender} />
        <ApplicantInfoItem label="Birthday" value={applicant?.birthday} />
        <ApplicantInfoItem label="Telephone" value={applicant?.tel} />
        <ApplicantInfoItem label="Guardian's Telephone" value={applicant?.guardianTel} />
        {applicant?.answers && (
          <>
            <h3 className="font-semibold mt-4 mb-2">Application Answers:</h3>
            {applicant.answers.map((answer, index) => (
              <ApplicantInfoItem key={index} label={`Question ${index + 1}`} value={answer} />
            ))}
          </>
        )}
      </div>
      <DialogFooter>
        <Button onClick={() => onOpenChange(false)}>Close</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default ApplicantInfoDialog;