export const formatCurrency = (value: number) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};

export const formatearFecha = (fecha: Date): string => {
  const fechaNueva = new Date(fecha);
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return fechaNueva.toLocaleDateString('es-ES', options);
};
