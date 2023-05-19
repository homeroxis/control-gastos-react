import * as React from 'react';
import { useState } from 'react';
import { Alert } from '../ui/Alert';

interface Props {
  presupuesto: number;
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>;
  isValidPresupuesto: boolean;
  setIsValidPresupuesto: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}: Props) => {
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!presupuesto || presupuesto <= 0) {
      setMensaje('Debe ingresar un valor válido');
      console.log(typeof mensaje);
      return;
    }
    setIsValidPresupuesto(true);
  };

  return (
    <div className="row mt-5">
      <div className="col">
        <h2>Ingresa tu presupuesto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              value={presupuesto}
              onChange={(e) => setPresupuesto(Number(e.target.value))}
            />
          </div>
          {mensaje && <Alert msg={mensaje} tipo="success" />}

          <input type="submit" className="btn btn-primary" value="añadir" />
        </form>
      </div>
    </div>
  );
};
