import * as React from 'react';
import { useState } from 'react';
import { NuevoPresupuesto } from './components/NuevoPresupuesto';

export const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  return (
    <div>
      {isValidPresupuesto ? (
        <h1>Hola</h1>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </div>
  );
};
