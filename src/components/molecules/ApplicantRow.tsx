import React from 'react';
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import StatusIcon from '@/components/atoms/StatusIcon';
import { EyeIcon, MoreVertical } from "lucide-react";

interface Applicant {
  id: number;
  name: string;
  email: string;
  school: string;
  status: string;
}

interface ApplicantRowProps {
  applicant: Applicant;
  onReview: (applicant: Applicant) => void;
  onViewInfo: (applicant: Applicant) => void;
  onUpdateStatus: (applicant: Applicant, status: string) => void;
}

const ApplicantRow: React.FC<ApplicantRowProps> = ({ applicant, onReview, onViewInfo, onUpdateStatus }) => (
  <TableRow>
    <TableCell>{applicant.name}</TableCell>
    <TableCell>{applicant.email}</TableCell>
    <TableCell>{applicant.school}</TableCell>
    <TableCell className="flex items-center">
      <StatusIcon status={applicant.status} />
      <span className="ml-2">{applicant.status}</span>
    </TableCell>
    <TableCell>
      <div className="flex items-center space-x-2">
        <Button onClick={() => onReview(applicant)}>Review</Button>
        <Button onClick={() => onViewInfo(applicant)} variant="outline">
          <EyeIcon className="h-4 w-4 mr-2" /> View Info
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
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
    </TableCell>
  </TableRow>
);

export default ApplicantRow;