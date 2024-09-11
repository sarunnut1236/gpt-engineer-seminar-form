import React from 'react';
import { CheckCircle, Clock, XCircle, UserCheck, Award } from 'lucide-react';

const statusConfig = [
  { status: 'Pending', icon: Clock, color: 'text-yellow-500' },
  { status: 'Pending Interview', icon: UserCheck, color: 'text-blue-500' },
  { status: 'Rejected', icon: XCircle, color: 'text-red-500' },
  { status: 'Pending Confirm', icon: Clock, color: 'text-orange-500' },
  { status: 'Accepted', icon: Award, color: 'text-green-500' },
];

const ApplicationStatusTimeline = ({ currentStatus }) => {
  const currentStatusIndex = statusConfig.findIndex(s => s.status === currentStatus);

  return (
    <div className="flex items-center justify-between w-full py-4">
      {statusConfig.map((status, index) => {
        const Icon = status.icon;
        const isActive = index <= currentStatusIndex;
        const isLast = index === statusConfig.length - 1;

        return (
          <React.Fragment key={status.status}>
            <div className="flex flex-col items-center">
              <div className={`rounded-full p-2 ${isActive ? status.color : 'text-gray-300'}`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'font-semibold' : 'text-gray-500'}`}>
                {status.status}
              </span>
            </div>
            {!isLast && (
              <div className={`flex-grow h-0.5 ${index < currentStatusIndex ? 'bg-green-500' : 'bg-gray-300'}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ApplicationStatusTimeline;