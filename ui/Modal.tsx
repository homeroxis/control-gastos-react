import * as React from 'react';
import { useState } from 'react';
import { gastoProps } from '../App';
import { useForms } from '../hooks/useForms';
import { Alert } from './Alert';

interface Props {
  title?: string;
  gastos: any[];
  setGastos: React.Dispatch<React.SetStateAction<any[]>>;
  // gasto: {};
  // setGasto: React.Dispatch<React.SetStateAction<{}>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  guardarGasto: (args: gastoProps) => void;
}

export const Modal = ({
  title = 'Sin título',
  gastos,
  setGastos,
  // gasto,
  // setGasto,
  modal,
  setModal,
  guardarGasto,
}: Props) => {
  const [mensaje, setMensaje] = useState('');

  const { nombre, cantidad, categoria, onChange, formData, resetForm } =
    useForms({
      nombre: '',
      cantidad: '',
      categoria: '',
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nombre, cantidad, categoria } = formData;

    // validación
    if (nombre === '' || cantidad === '' || categoria === '') {
      setMensaje('Los campos son obligatorios');
      setTimeout(() => {
        setMensaje('');
      }, 3000);

      return;
    }
    guardarGasto(formData);
    resetForm();
    cerrarModal();
  };

  const cerrarModal = () => {
    setModal(false);
  };

  return (
    <div className="bg-modal">
      <div className="card" style={{ with: '70%' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="div mb-3">
              <label htmlFor="nombre" className="label-control">
                Nombre gasto
              </label>
              <input
                name="nombre"
                value={nombre}
                onChange={onChange}
                type="text"
                className="form-control"
                placeholder="Ej. Comida"
              />
            </div>
            <div className="div mb-3">
              <label htmlFor="cantidad" className="label-control">
                Cantidad
              </label>
              <input
                name="cantidad"
                value={Number(cantidad)}
                onChange={onChange}
                type="number"
                className="form-control"
                placeholder="Ej. 1000"
              />
            </div>
            <div className="div mb-3">
              <label htmlFor="nombre" className="label-control">
                Categoria
              </label>
              <select
                className="form-control"
                name="categoria"
                value={formData.categoria}
                onChange={onChange}
              >
                <option value="">--Seleccione categoría--</option>
                <option value="salud">Salud</option>
                <option value="comida">Comida</option>
                <option value="varios">Varios</option>
                <option value="transporte">Transporte</option>
                <option value="ocio">Ocio</option>
              </select>
            </div>
            {mensaje && <Alert msg={mensaje} tipo="danger" />}
            <button type="submit" className="btn btn-primary me-2">
              añadir gasto
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={cerrarModal}
            >
              cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
