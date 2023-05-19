import * as React from 'react';

interface tipoMensaje {
  tipo: 'success' | 'warning' | 'danger';
}

export const Mensaje = (mensaje: string, tipo: tipoMensaje) => {
  return <div className={`alert alert-${tipo} my-3`}>{mensaje}</div>;
};
