import * as React from 'react';
import { useEffect } from 'react';
import { formatCurrency } from '../helpers';

export const ListadoGastos = ({ gastos }) => {
  return (
    <div>
      {gastos &&
        gastos.map((gasto) => {
          const { nombre, cantidad, categoria, id } = gasto;
          console.log(gastos);
          console.log(typeof cantidad);
          return (
            <div key={id}>
              {nombre} - {formatCurrency(Number(cantidad))} - {categoria}
            </div>
          );
        })}
    </div>
  );
};
