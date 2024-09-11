import React from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ApplicantRow from '@/components/molecules/ApplicantRow';

const ApplicantsTable = ({ applicants, onReview, onViewInfo, onUpdateStatus }) => (
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