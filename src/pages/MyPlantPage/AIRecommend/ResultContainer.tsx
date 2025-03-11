interface ResultContainerProps {
  plantName: string;
  imageUrl: string;
}
export default function ResultContainer({
  plantName,
  imageUrl,
}: ResultContainerProps) {
  return (
    <section className="flex-1 rounded">
      {/* 사진 */}
      <figure className="w-full h-[90%]">
        <img
          src={imageUrl}
          alt="Recommended Plant"
          className="w-full h-full object-cover rounded-t"
        />
      </figure>

      {/* 식물 이름 */}
      <div className="w-full h-[10%] bg-white flex justify-center items-center rounded-b">
        <span className="text-md font-bold">{plantName}</span>
      </div>
    </section>
  );
}
