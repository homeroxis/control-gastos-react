import * as React from 'react';
import { useState, useEffect } from 'react';
import { formatCurrency } from '../helpers';

export const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );
    setGastado(totalGastado);
    const restante = presupuesto - totalGastado;
    setDisponible(restante);
  }, [gastos]);

  return (
    <div className="row mt-5">
      <div className="col-6"></div>
      <div className="col-6">
        <ul className="list-group">
          <li className="list-group-item text-primary">
            Presupuesto:{' '}
            <span className="fw-bold text-dark">
              {formatCurrency(presupuesto)}
            </span>
          </li>
          <li className="list-group-item text-primary">
            Disponible:{' '}
            <span className="fw-bold text-dark">
              {formatCurrency(disponible)}
            </span>
          </li>
          <li className="list-group-item text-primary">
            Gastado:{' '}
            <span className="fw-bold text-dark">{formatCurrency(gastado)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
