import * as React from 'react';
import { useForms } from '../hooks/useForms';

interface Props {
  title: string;
  gastos: any[];
  setGastos: React.Dispatch<React.SetStateAction<any[]>>;
  gasto: {};
  setGasto: React.Dispatch<React.SetStateAction<{}>>;
}

export const Modal = ({
  title = 'Sin título',
  gastos,
  setGastos,
  gasto,
  setGasto,
}: Props) => {
  const { nombre, cantidad, poto, onChange, formData } = useForms({
    nombre: '',
    cantidad: '',
    poto: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Sibmit desde modal', formData);
  };

  return (
    <div className="bg-modal">
      <div className="card" style={{ with: '60vh' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
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
                value={cantidad}
                onChange={onChange}
                type="text"
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
            <button className="btn btn-primary">añadir gasto</button>
          </form>
        </div>
      </div>
    </div>
  );
};
