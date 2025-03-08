export const formatMoneyKR = (money: number) => {
  return (
    money.toLocaleString('ko-KR', {
      currency: 'KRW',
      minimumFractionDigits: 0,
    }) + ' 원'
  );
};
