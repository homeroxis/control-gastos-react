import * as React from 'react';
import { useState } from 'react';

interface Props {
  presupuesto: number;
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>;
  mensaje: string;
  setMensaje: React.Dispatch<React.SetStateAction<string>>;
}

export const NuevoPresupuesto = ({ 
  presupuesto, 
  setPresupuesto,
  mensaje,
  setMensaje
}:Props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((e.target.value = '' || e.target.value <= 0)) {
      console.log('Debe ingresar un valor válido');
    }
    console.log(typeof presupuesto);
  };

  return (
    <div className="row mt-5">
      <div className="col">
        <h2>Ingresa tu presupuesto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={presupuesto}
              onChange={(e) => setPresupuesto(Number(e.target.value))}
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};
