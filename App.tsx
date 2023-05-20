import * as React from 'react';
import { useState } from 'react';
import { ControlPresupuesto } from './components/ControlPresupuesto';
import { ListadoGastos } from './components/ListadoGastos';
import { NuevoPresupuesto } from './components/NuevoPresupuesto';
import { generarId } from './helpers';
import { Modal } from './ui/Modal';

export interface gastoProps {
  nombre: string;
  cantidad: number;
  categoria: string;
  id?: string;
}

export const App = () => {
  const [presupuesto, setPresupuesto] = useState();
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const guardarGasto = (gasto: gastoProps) => {
    gasto.id = generarId();
    setGastos([...gastos, gasto]);
  };

  return (
    <div>
      {isValidPresupuesto ? (
        <div>
          <ControlPresupuesto presupuesto={presupuesto} />
          <ListadoGastos gastos={gastos} />
          <button
            className="btn btn-danger"
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              borderRadius: '50%',
              boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.4)',
            }}
            onClick={openModal}
          >
            +
          </button>
        </div>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}

      {modal && (
        <Modal
          setModal={setModal}
          title="Ingresar Gasto"
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
};
