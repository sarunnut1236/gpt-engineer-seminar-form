import React from 'react';
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import StatusIcon from '@/components/atoms/StatusIcon';
import { EyeIcon } from "lucide-react";

const ApplicantRow = ({ applicant, onReview, onViewInfo }) => (
  <TableRow>
    <TableCell>{applicant.name}</TableCell>
    <TableCell>{applicant.email}</TableCell>
    <TableCell>{applicant.school}</TableCell>
    <TableCell className="flex items-center">
      <StatusIcon status={applicant.status} />
      <span className="ml-2">{applicant.status}</span>
    </TableCell>
    <TableCell>
      <Button onClick={() => onReview(applicant)} className="mr-2">Review</Button>
      <Button onClick={() => onViewInfo(applicant)} variant="outline">
        <EyeIcon className="h-4 w-4 mr-2" /> View Info
      </Button>
    </TableCell>
  </TableRow>
);

export default ApplicantRow;