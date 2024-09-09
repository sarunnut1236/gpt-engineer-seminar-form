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
        {/* Add more personal information fields here */}
      </div>
      <DialogFooter>
        <Button onClick={() => onOpenChange(false)}>Close</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default ApplicantInfoDialog;