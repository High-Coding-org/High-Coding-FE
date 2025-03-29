/**
 * PlantImage
 *
 * 추천된 식물의 이미지를 표시하는 컴포넌트입니다.
 */
//! 현재 임시 이미지 url 사용하고 있으며, 추후에 unsplash api로 이미지 가져올 예정정
export default function PlantImage() {
  return (
    <img
      src="https://health.chosun.com/site/data/img_dir/2021/08/24/2021082401938_0.jpg"
      alt="Recommended Plant"
      className="w-full h-[253px] object-fill rounded overflow-hidden"
    />
  );
}
