import React from 'react';
import { CheckCircle2, Circle, XCircle, Clock } from 'lucide-react';

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

const StatusIcon = ({ status, isActive }) => {
  const baseClasses = "w-8 h-8 rounded-full flex items-center justify-center";
  const activeClasses = isActive ? "text-white" : "text-gray-400";
  
  switch (status) {
    case 'Completed Application Form':
    case 'Round #1 Pass':
    case 'Interviewed':
    case 'Accepted':
      return <CheckCircle2 className={`${baseClasses} ${activeClasses} ${isActive ? "bg-green-500" : "bg-gray-200"}`} />;
    case 'Round #1 Rejected':
    case 'Rejected':
      return <XCircle className={`${baseClasses} ${activeClasses} ${isActive ? "bg-red-500" : "bg-gray-200"}`} />;
    case 'Pending Application Form':
    case 'Pending Interview':
    case 'Pending Confirmation':
      return <Clock className={`${baseClasses} ${activeClasses} ${isActive ? "bg-yellow-500" : "bg-gray-200"}`} />;
    default:
      return <Circle className={`${baseClasses} ${activeClasses} ${isActive ? "bg-blue-500" : "bg-gray-200"}`} />;
  }
};

const ApplicationStatusTimeline = ({ currentStatus }) => {
  const currentStatusIndex = statuses.indexOf(currentStatus);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-[#2C3539]">Application Status</h3>
      <div className="space-y-4">
        {statuses.map((status, index) => (
          <div key={status} className={`flex items-center ${index <= currentStatusIndex ? 'opacity-100' : 'opacity-50'}`}>
            <StatusIcon status={status} isActive={index <= currentStatusIndex} />
            <div className="ml-4 flex-grow">
              <p className={`font-medium ${index === currentStatusIndex ? 'text-[#2C3539]' : 'text-gray-500'}`}>{status}</p>
              {index === currentStatusIndex && (
                <p className="text-sm text-gray-500">Current Status</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatusTimeline;