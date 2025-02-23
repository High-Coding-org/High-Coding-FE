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
        className={`${className} bg-white border border-gray-200 rounded-lg shadow-md`}>
        {children}
      </div>
    </section>
  );
}
