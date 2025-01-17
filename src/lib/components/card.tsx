import React from "react";
import { cn } from "../styles/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("rounded-xl lg:bg-[#fefefe]/[0.04]", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn("p-6 max-lg:p-2", className)}>{children}</div>;
}
