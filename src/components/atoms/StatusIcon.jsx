import React from 'react';
import { ClockIcon, CheckCircleIcon, XCircleIcon } from "lucide-react";

const StatusIcon = ({ status }) => {
  switch (status) {
    case "Pending Review":
      return <ClockIcon className="h-5 w-5 text-yellow-500" />;
    case "Interviewed":
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    case "Rejected":
      return <XCircleIcon className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

export default StatusIcon;