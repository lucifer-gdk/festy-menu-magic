
import React from 'react';
import { cn } from "@/lib/utils";

interface CloudProps {
  children: React.ReactNode;
  className?: string;
}

const Cloud: React.FC<CloudProps> = ({ children, className }) => {
  return (
    <div className={cn("cloud-title relative z-10", className)}>
      <span className="relative z-10">{children}</span>
    </div>
  );
};

export default Cloud;
