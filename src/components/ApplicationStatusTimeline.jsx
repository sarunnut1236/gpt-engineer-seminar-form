import React from 'react';
import { CheckCircle2, Circle, XCircle, Clock } from 'lucide-react';

const statuses = [
  'Pending Application',
  'Application Submitted',
  'Round 1 Pass',
  'Round 1 Rejected',
  'Interview Scheduled',
  'Interviewed',
  'Offer Pending',
  'Accepted',
  'Rejected'
];

const StatusIcon = ({ status, isActive }) => {
  const baseClasses = "h-4 w-4";
  const activeClasses = isActive ? "text-blue-500" : "text-gray-300";
  
  switch (status) {
    case 'Application Submitted':
    case 'Round 1 Pass':
    case 'Interviewed':
    case 'Accepted':
      return <CheckCircle2 className={`${baseClasses} ${isActive ? "text-green-500" : "text-gray-300"}`} />;
    case 'Round 1 Rejected':
    case 'Rejected':
      return <XCircle className={`${baseClasses} ${isActive ? "text-red-500" : "text-gray-300"}`} />;
    case 'Pending Application':
    case 'Interview Scheduled':
    case 'Offer Pending':
      return <Clock className={`${baseClasses} ${isActive ? "text-yellow-500" : "text-gray-300"}`} />;
    default:
      return <Circle className={`${baseClasses} ${activeClasses}`} />;
  }
};

const ApplicationStatusTimeline = ({ currentStatus }) => {
  const currentIndex = statuses.indexOf(currentStatus);

  return (
    <div className="flex flex-col space-y-2">
      {statuses.map((status, index) => (
        <div key={status} className="flex items-center">
          <StatusIcon status={status} isActive={index <= currentIndex} />
          <div className={`ml-2 text-sm ${index <= currentIndex ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
            {status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationStatusTimeline;