import * as React from 'react';
import { useState } from 'react';
import { ControlPresupuesto } from './components/ControlPresupuesto';
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
  const [presupuesto, setPresupuesto] = useState('');
  const [gastos, setGastos] = useState([]);
  // const [gasto, setGasto] = useState({});
  const [modal, setModal] = useState(false);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const guardarGasto = (gastoObj: gastoProps) => {
    gastoObj.id = generarId();
    setGastos([...gastos, gastoObj]);
    console.log('desde App', gastos);
  };

  return (
    <div>
      {isValidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
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
      {modal && (
        <Modal
          gastos={gastos}
          setGastos={setGastos}
          // gasto={gasto}
          // setGasto={setGasto}
          modal={modal}
          setModal={setModal}
          title="Ingresar Gasto"
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
};
