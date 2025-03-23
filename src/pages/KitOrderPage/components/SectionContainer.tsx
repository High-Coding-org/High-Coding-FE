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
    <section className="mb-6 mt-9">
      <Label className="pl-2 text-lg font-extrabold">{label}</Label>

      <div
        className={`${className} mt-3 bg-white border border-gray-200 rounded-lg shadow-md`}>
        {children}
      </div>
    </section>
  );
}
