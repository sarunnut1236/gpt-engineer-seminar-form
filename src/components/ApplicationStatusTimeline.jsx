import React from 'react';
import { motion } from 'framer-motion';
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

  const variants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: { scale: 1.2, opacity: 1 }
  };

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold">Application Status</h3>
      <div className="relative">
        {statuses.map((status, index) => (
          <motion.div
            key={status}
            className="flex items-center mb-4"
            initial="inactive"
            animate={index <= getCurrentStatusIndex() ? "active" : "inactive"}
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            {index <= getCurrentStatusIndex() ? (
              status === 'Round #1 Rejected' || status === 'Rejected' ? (
                <XCircle className="h-6 w-6 text-red-500" />
              ) : (
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              )
            ) : (
              <Circle className="h-6 w-6 text-gray-300" />
            )}
            <span className={`ml-2 ${index === getCurrentStatusIndex() ? 'font-bold' : ''}`}>
              {status}
            </span>
            {index < statuses.length - 1 && (
              <motion.div
                className="absolute left-3 w-0.5 bg-gray-300"
                initial={{ height: 0 }}
                animate={{ height: index < getCurrentStatusIndex() ? 24 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ top: `${(index + 1) * 32}px` }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatusTimeline;