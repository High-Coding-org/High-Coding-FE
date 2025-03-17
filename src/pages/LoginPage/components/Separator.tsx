export default function Separator() {
  return (
    <div className="flex items-center w-full mt-4 mb-2">
      <div className="flex-grow h-[1px] bg-gray-300"></div>
      <span className="px-4 text-sm text-gray-500">또는</span>
      <div className="flex-grow h-[1px] bg-gray-300"></div>
    </div>
  );
}
