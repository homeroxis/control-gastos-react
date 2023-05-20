export const formatCurrency = (value: number) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};
