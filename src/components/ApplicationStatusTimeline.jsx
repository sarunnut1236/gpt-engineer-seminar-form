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

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'Application Submitted':
    case 'Round 1 Pass':
    case 'Interviewed':
    case 'Accepted':
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case 'Round 1 Rejected':
    case 'Rejected':
      return <XCircle className="h-4 w-4 text-red-500" />;
    case 'Pending Application':
    case 'Interview Scheduled':
    case 'Offer Pending':
      return <Clock className="h-4 w-4 text-yellow-500" />;
    default:
      return <Circle className="h-4 w-4 text-gray-300" />;
  }
};

const ApplicationStatusTimeline = ({ currentStatus }) => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      {statuses.map((status, index) => (
        <div key={status} className="flex items-center">
          <StatusIcon status={status} />
          {index < statuses.length - 1 && (
            <div className={`h-0.5 w-4 ${index < statuses.indexOf(currentStatus) ? 'bg-green-500' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ApplicationStatusTimeline;