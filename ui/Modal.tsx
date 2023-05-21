import * as React from 'react';
import { useState, useEffect } from 'react';
import { gastoProps } from '../App';
import { useForms } from '../hooks/useForms';
import { Alert } from './Alert';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  guardarGasto: (args: gastoProps) => void;
  gastoEditar: any;
  setGastoEditar: any;
}

export const Modal = ({
  setModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}: Props) => {
  const [mensaje, setMensaje] = useState('');

  const {
    nombre,
    cantidad,
    categoria,
    onChange,
    formData,
    setFormData,
    resetForm,
  } = useForms({
    nombre: '',
    cantidad: 0,
    categoria: '',
  });

  const [id, setId] = useState();
  const [fecha, setFecha] = useState();

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setFormData({
        ...formData,
        nombre: gastoEditar.nombre,
        cantidad: gastoEditar.cantidad,
        categoria: gastoEditar.categoria,
      });
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, []);

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

    guardarGasto({ nombre, cantidad, categoria, id, fecha });

    resetForm();
    cerrarModal();
  };

  const cerrarModal = () => {
    setModal(false);
    setGastoEditar({});
  };

  return (
    <div className="bg-modal">
      <div className="card" style={{ with: '70%' }}>
        <div className="card-body">
          <h5 className="card-title">
            {gastoEditar.nombre ? 'Editar gasto' : 'Nuevo gasto'}
          </h5>
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
              {gastoEditar.nombre ? 'Actualizar gasto' : 'Añadir gasto'}
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
