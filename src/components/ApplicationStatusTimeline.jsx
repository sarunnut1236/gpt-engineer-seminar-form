import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const statuses = [
  'Pending Application Form',
  'Completed Application Form',
  'Round #1 Pass',
  'Round #1 Rejected',
  'Pending Interview',
  'Pending Confirmation',
  'Accepted'
];

const ApplicationStatusTimeline = ({ currentStatus }) => {
  const getCurrentStatusIndex = () => {
    return statuses.indexOf(currentStatus);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold">Application Status</h3>
      <div className="relative">
        {statuses.map((status, index) => (
          <div key={status} className="flex items-center mb-4">
            {index <= getCurrentStatusIndex() ? (
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            ) : (
              <Circle className="h-6 w-6 text-gray-300" />
            )}
            <span className={`ml-2 ${index === getCurrentStatusIndex() ? 'font-bold' : ''}`}>
              {status}
            </span>
            {index < statuses.length - 1 && (
              <div className="absolute left-3 w-0.5 bg-gray-300 h-6 -bottom-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatusTimeline;