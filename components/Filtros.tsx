import * as React from 'react';
import { useEffect, useState } from 'react';

export const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="row my-4">
      <div className="col">
        <div className="card py-3 px-5">
          <h4>Filtro</h4>
          <form>
            <select
              name=""
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="form-control"
            >
              <option value="">--Filtrar categoría--</option>
              <option value="salud">Salud</option>
              <option value="comida">Comida</option>
              <option value="varios">Varios</option>
              <option value="transporte">Transporte</option>
              <option value="ocio">Ocio</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};
