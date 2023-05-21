import * as React from 'react';
import { useState, useEffect } from 'react';
import { ControlPresupuesto } from './components/ControlPresupuesto';
import { ListadoGastos } from './components/ListadoGastos';
import { NuevoPresupuesto } from './components/NuevoPresupuesto';
import { generarId } from './helpers';
import { Alert } from './ui/Alert';
import { Modal } from './ui/Modal';

export interface gastoProps {
  nombre: string;
  cantidad: number;
  categoria: string;
  id?: string;
  fecha?: any;
}

export const App = () => {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos')
      ? JSON.parse(localStorage.getItem('gastos'))
      : []
  );
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [modal, setModal] = useState(false);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  useEffect(() => {
    const presupuestoLocalStorage =
      Number(localStorage.getItem('presupuesto')) ?? 0;
    if (presupuestoLocalStorage > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const setAlerta = (mensaje: string, tipo: string) => {
    setMensaje(mensaje);
    setTimeout(() => {
      setMensaje('');
    }, 2000);
  };

  const guardarGasto = (gasto: gastoProps) => {
    if (gasto.id) {
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setAlerta('Gasto actualizado...', 'success');
      setGastoEditar({});
      return;
    }
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setAlerta('Gasto agregado correctamente...', 'success');
  };

  const eliminarGasto = (id: string) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
    setAlerta('Gasto eliminado correctamente...', 'success');
  };

  return (
    <div>
      {isValidPresupuesto ? (
        <div>
          <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
          {mensaje && <Alert msg={mensaje} tipo="success" />}

          <ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
          />
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
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
};
