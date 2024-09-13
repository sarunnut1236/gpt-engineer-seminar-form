import React from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ApplicantRow from '@/components/molecules/ApplicantRow';

interface Applicant {
  id: number;
  name: string;
  email: string;
  school: string;
  status: string;
}

interface ApplicantsTableProps {
  applicants: Applicant[];
  onReview: (applicant: Applicant) => void;
  onViewInfo: (applicant: Applicant) => void;
  onUpdateStatus: (applicant: Applicant, status: string) => void;
}

const ApplicantsTable: React.FC<ApplicantsTableProps> = ({ applicants, onReview, onViewInfo, onUpdateStatus }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>School</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {applicants.map((applicant) => (
        <ApplicantRow
          key={applicant.id}
          applicant={applicant}
          onReview={onReview}
          onViewInfo={onViewInfo}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </TableBody>
  </Table>
);

export default ApplicantsTable;