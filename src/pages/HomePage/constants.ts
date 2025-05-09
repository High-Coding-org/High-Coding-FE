import {
  BotMessageSquare,
  Droplet,
  MonitorDot,
  NotebookPen,
} from 'lucide-react';

// Text
export const title = ['나만의 키트로 만들어가는', '임베디드 스마트 팜'];
export const subTitle = [
  '웹과 임베디드 기술이 만난 DIY 스마트팜',
  '복잡한 설치 없이,  누구나 쉽고 직관적으로 식물을 관리할 수 있습니다.',
  '스마트한 자동화 식물 관리,  직접 체험해 보세요!',
];
export const part1_Text = ['처음 키우는 식물도', '어려움 없이'];
export const part1_SubText = [
  '스마트팜으로 시작하세요.',
  '이제는 누구나 손쉽게',
  '식물 전문가처럼 키울 수 있습니다.',
];
export const part2_Text = ['식물을 체계적으로', '관리해 보세요'];
export const part2_SubText = [
  '식물 성장 일기 페이지에서',
  '식물의 상태를 간편하게 기록하고',
  '생장 패턴을 시각적으로 확인할 수 있어요.',
];
export const part3_Text = ['어떤 식물을 키울지', '고민되시나요?'];
export const part3_SubText = [
  'AI가 여러분의 환경을 분석하여',
  '키우기 적합한 식물을 추천해드립니다.',
];
export const part4_Text = ['스마트팜 앱을 통해', '손쉬운 식물 관리까지'];
export const part4_SubText = [
  '환경 데이터를 실시간으로 측정해요.',
  '원하는 날짜의 데이터를 차트로 확인해 보세요.',
  '식물 성장 추이를 확인할 수 있어요.',
];
export const part5_Text = ['하이코딩만의', '특별한 기능들'];
export const part5_SubText = [
  {
    title: '자동 급수 시스템',
    icon: 'Droplet',
    subTitle:
      '식물의 토양 상태를 실시간으로 감지하여 식물에 필요한 만큼의 물만을 자동으로 공급합니다. 과습이나 건조를 방지하여 건강한 생장을 유도합니다.',
  },
  {
    title: '환경 모니터링',
    icon: 'MonitorDot',
    subTitle:
      '환경 데이터를 실시간으로 측정하고, 이를 사용자가 직관적으로 확인할 수 있도록 제공합니다. 식물 생장에 영향을 미치는 환경 변화를 한눈에 파악할 수 있습니다.',
  },
  {
    title: '나만의 식물 일기',
    icon: 'NotebookPen',
    subTitle:
      '식물의 성장 과정과 관리 이력을 체계적으로 기록할 수 있습니다. 사용자는 식물의 상태를 간편하게 기록하고, 생장 패턴을 시각적으로 확인할 수 있습니다.',
  },
  {
    title: 'AI 식물 추천 서비스',
    icon: 'BotMessageSquare',
    subTitle:
      '인공지능 기반 식물 추천 시스템은  환경 요소를 고려한 최적의 식물을 제공합니다. 보다 체계적인 방식으로 반려 식물을 선택할 수 있도록 도와드립니다.',
  },
];
export const footer_Text = '지금 하이코딩과 함께 시작해 보세요.';

// Class
export const titleClass =
  ' text-6xl font-bold leading-normal text-center whitespace-pre sm:text-4xl sm:font-semibold sm:leading-normal';
export const subTitleClass =
  'text-3xl font-semibold leading-relaxed tracking-tight text-center whitespace-pre sm:text-2xl sm:font-normal';
export const part1_Class =
  'text-4xl font-bold leading-relaxed tracking-tight sm:text-2xl';
export const part1_SubClass = 'text-2xl leading-relaxed tracking-tight';
export const part5_Class =
  'text-4xl font-bold leading-relaxed tracking-tight sm:text-2xl';
export const part5_SubTextClass = 'text-base font-semibold text-gray-500';

// Icon
export const iconMap = {
  Droplet,
  MonitorDot,
  NotebookPen,
  BotMessageSquare,
};

export const iconColorMap = {
  Droplet: 'text-sky-500',
  MonitorDot: 'text-cyan-600',
  NotebookPen: 'text-yellow-400',
  BotMessageSquare: 'text-purple-400',
};
