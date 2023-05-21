import * as React from 'react';
import { Gasto } from './Gasto';

export const ListadoGastos = ({ gastos, setGastoEditar }) => {
  return (
    <div className="row mt-5">
      <div className="col">
        {gastos &&
          gastos.map((gasto: any) => {
            return (
              <Gasto
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                key={gasto.id}
              />
            );
          })}
      </div>
    </div>
  );
};
