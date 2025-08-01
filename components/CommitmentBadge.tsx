"use client";

interface CommitmentBadgeProps {
  number: string;
  title: string;
  description: string;
}

export default function CommitmentBadge({ number, title, description }: CommitmentBadgeProps) {
  return (
    <div className="flex items-start">
      <div 
        className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
        style={{
          background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
        }}
      >
        <span className="text-white font-bold">{number}</span>
      </div>
      <div className="ml-4">
        <h4 className="text-xl font-semibold text-slate-800">
          {title}
        </h4>
        <p className="text-slate-600 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}