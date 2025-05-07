interface CheckGrowthValueResult {
  isValid: boolean;
  message?: string;
}

export const checkGrowthValue = (value: string): CheckGrowthValueResult => {
  // 빈 값 체크
  if (!value.trim()) {
    return {
      isValid: false,
      message: '식물 길이 값을 입력해주세요.',
    };
  }

  // 숫자 형식 체크
  if (isNaN(Number(value))) {
    return {
      isValid: false,
      message: '숫자 외의 값은 입력하실 수 없습니다.',
    };
  }

  // 음수 체크
  if (Number(value) <= 0) {
    return {
      isValid: false,
      message: '0 이하의 값은 입력할 수 없습니다.',
    };
  }

  return { isValid: true };
};
