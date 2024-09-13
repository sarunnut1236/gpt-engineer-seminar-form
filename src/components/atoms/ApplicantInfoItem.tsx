import React from 'react';

interface ApplicantInfoItemProps {
  label: string;
  value: string | number;
}

const ApplicantInfoItem: React.FC<ApplicantInfoItemProps> = ({ label, value }) => (
  <p><strong>{label}:</strong> {value}</p>
);

export default ApplicantInfoItem;