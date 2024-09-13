import React from 'react';
import { ClockIcon, CheckCircleIcon, XCircleIcon, UserIcon, FileTextIcon } from "lucide-react";

interface StatusIconProps {
  status: string;
}

const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  switch (status) {
    case "Pending Review":
    case "Pending Interview":
    case "Pending Confirmation":
      return <ClockIcon className="h-5 w-5 text-yellow-500" />;
    case "Interviewed":
    case "Accepted":
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    case "Round #1 Rejected":
    case "Rejected":
      return <XCircleIcon className="h-5 w-5 text-red-500" />;
    case "Round #1 Pass":
      return <UserIcon className="h-5 w-5 text-blue-500" />;
    case "Completed Application Form":
      return <FileTextIcon className="h-5 w-5 text-purple-500" />;
    default:
      return null;
  }
};

export default StatusIcon;