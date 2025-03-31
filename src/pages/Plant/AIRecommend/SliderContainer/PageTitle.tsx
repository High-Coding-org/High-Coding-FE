import { TITLES } from '../constants/titles';
export default function PageTitle({ idx }: { idx: number }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span className="font-bold">{TITLES[idx]}</span>
    </div>
  );
}
