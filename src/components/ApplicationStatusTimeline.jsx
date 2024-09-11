import React from 'react';
import { CheckCircle2, Circle, XCircle } from 'lucide-react';

const statuses = [
  'Pending Application Form',
  'Completed Application Form',
  'Round #1 Pass',
  'Round #1 Rejected',
  'Pending Interview',
  'Interviewed',
  'Pending Confirmation',
  'Accepted',
  'Rejected'
];

const ApplicationStatusTimeline = ({ currentStatus }) => {
  const getCurrentStatusIndex = () => statuses.indexOf(currentStatus);

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold">Application Status</h3>
      <div className="relative">
        {statuses.map((status, index) => (
          <div
            key={status}
            className={`flex items-center mb-4 transition-all duration-300 ease-in-out ${
              index <= getCurrentStatusIndex() ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
            }`}
          >
            {index <= getCurrentStatusIndex() ? (
              status === 'Round #1 Rejected' || status === 'Rejected' ? (
                <XCircle className="h-6 w-6 text-red-500 transition-all duration-300 ease-in-out" />
              ) : (
                <CheckCircle2 className="h-6 w-6 text-green-500 transition-all duration-300 ease-in-out" />
              )
            ) : (
              <Circle className="h-6 w-6 text-gray-300 transition-all duration-300 ease-in-out" />
            )}
            <span className={`ml-2 ${index === getCurrentStatusIndex() ? 'font-bold' : ''}`}>
              {status}
            </span>
            {index < statuses.length - 1 && (
              <div
                className="absolute left-3 w-0.5 bg-gray-300 transition-all duration-300 ease-in-out"
                style={{
                  top: `${(index + 1) * 32}px`,
                  height: index < getCurrentStatusIndex() ? '24px' : '0',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatusTimeline;