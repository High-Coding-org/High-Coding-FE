interface ProfileItemProps {
  label: string;
  value: string;
}

export default function ProfileItem({ label, value }: ProfileItemProps) {
  return (
    <div className="flex flex-col md:flex-row border-b border-gray-200 py-2 md:items-center">
      <span className="text-sm text-gray-600 w-32 p-2">{label}</span>
      <div className="flex-1 p-2">{value || '-'}</div>
    </div>
  );
}
