import * as React from 'react';
import { Gasto } from './Gasto';

export const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
  return (
    <div className="row mt-5">
      <div className="col">
        {gastos &&
          gastos.map((gasto: any) => {
            return (
              <Gasto
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                key={gasto.id}
              />
            );
          })}
      </div>
    </div>
  );
};
