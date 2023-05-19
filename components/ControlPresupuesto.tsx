import * as React from 'react';
import { useState } from 'react';
import { formatCurrency } from '../helpers';

export const ControlPresupuesto = ({ presupuesto }) => {
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
            Gastos: <span className="fw-bold text-dark">0</span>
          </li>
          <li className="list-group-item text-primary">
            Restante: <span className="fw-bold text-dark">0</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
