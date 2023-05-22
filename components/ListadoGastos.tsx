import * as React from 'react';
import { Gasto } from './Gasto';

export const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="row mt-5">
      <div className="col">
        {filtro ? (
          <div>
            <h4>
              {gastosFiltrados.length
                ? 'Gastos filtrados'
                : 'No hay gastos por esa categoría'}
            </h4>
            {gastosFiltrados.map((gasto: any) => {
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
        ) : (
          <div>
            <h4>{gastos.length ? 'Gastos' : 'No hay gastos'}</h4>
            {gastos.map((gasto: any) => {
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
        )}
      </div>
    </div>
  );
};
