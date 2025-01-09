export const RULES = {
  NAME: { required: '(이름이 입력되지 않았습니다)' },
  ID: { required: '(아이디가 입력되지 않았습니다)' },
  PASSWORD: { required: '(비밀번호가 입력되지 않았습니다)' },
  PHONE: { required: '(전화번호가 입력되지 않았습니다)' },
};

export const PATTERN = {
  NAME: {
    value: /^.{2,}$/,
    message: '(2글자 이상 입력해주세요)',
  },
  ID: {
    value: /^.{4,}$/,
    message: '4자 이상 입력해주세요',
  },
  PASSWORD: {
    value: /^.{6,}$/,
    message: '6자 이상 입력해주세요',
  },
  PHONE: {
    value: /^\d{7,8}$/,
    message: '숫자 7~8자리를 입력해주세요',
  },
};

export const INVALID_FORM_STYLE = 'border-red-500 focus-visible:ring-red-500';
