import * as React from 'react';
import { useState, useEffect } from 'react';
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
  fecha?: any;
}

export const App = () => {
  const [presupuesto, setPresupuesto] = useState();
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
    }
  }, [gastoEditar]);

  const openModal = () => {
    setModal(true);
  };

  const guardarGasto = (gasto: gastoProps) => {
    if (gasto.id) {
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
      return;
    }
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
  };

  return (
    <div>
      {isValidPresupuesto ? (
        <div>
          <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
          <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} />
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
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}

      {modal && (
        <Modal
          setModal={setModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
};
