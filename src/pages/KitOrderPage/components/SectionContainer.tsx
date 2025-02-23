import { ReactNode } from 'react';

import { Label } from '@/components/ui/label';

interface SectionContainerProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  label,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section>
      <Label className="pl-4 font-bold">{label}</Label>

      <div
        className={`p-6 bg-white border border-gray-200 rounded-lg shadow-md ${className}`}>
        {children}
      </div>
    </section>
  );
}
