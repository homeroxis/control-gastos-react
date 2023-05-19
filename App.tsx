import * as React from 'react';
import { useState } from 'react';
import { NuevoPresupuesto } from './components/NuevoPresupuesto';

export const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [mensaje, setMensaje] = useState('');
  return (
    <NuevoPresupuesto
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      mensaje={mensaje}
      setMensaje={setMensaje}
    />
  );
};
