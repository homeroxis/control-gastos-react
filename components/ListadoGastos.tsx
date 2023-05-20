import * as React from 'react';
import { useEffect } from 'react';
import { formatCurrency } from '../helpers';

export const ListadoGastos = ({ gastos }) => {
  return (
    <div className="row mt-5">
      <div className="col">
        {gastos &&
          gastos.map((gasto) => {
            const { nombre, cantidad, categoria, id } = gasto;
            console.log(gastos);
            console.log(typeof cantidad);
            return (
              <div className="card" key={id}>
                <div className="card-header">
                  <div className="card-title">{nombre}</div>
                </div>
                <div className="card-body">
                  <div className="fw-bold">
                    {formatCurrency(Number(cantidad))} - {categoria}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
