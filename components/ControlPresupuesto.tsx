import * as React from 'react';
import { useState, useEffect } from 'react';
import { formatCurrency } from '../helpers';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
  setIsValidPresupuesto,
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [color, setColor] = useState('#0d6efd');

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );
    setGastado(totalGastado);
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    setPorcentaje(Number(nuevoPorcentaje));
  }, [gastos]);

  useEffect(() => {
    const asignarColor = () => {
      if (porcentaje > 75) {
        return '#dc3545';
      } else if (porcentaje > 50) {
        return '#ffc107';
      } else if (porcentaje <= 50) {
        return '#0d6efd';
      }
      return '';
    };
    const nuevoColor = asignarColor();
    setColor(nuevoColor);
  }, [porcentaje]);

  const handleReset = () => {
    const resultado = confirm('¿Deseas resetear presupuesto y gastos?');
    if (resultado) {
      setPresupuesto(0);
      setGastos([]);
      setIsValidPresupuesto(false);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
          styles={buildStyles({
            pathColor: color,
            textColor: color,
            trailColor: '#f5f5f5',
            textSize: '10px',
          })}
        />
      </div>
      <div className="col-8 d-flex flex-column justify-content-center">
        <button
          className="btn btn-danger mb-3"
          style={{ width: '50%' }}
          onClick={handleReset}
        >
          Resetear App
        </button>
        <ul className="list-group container-fluid">
          <li className="list-group-item text-primary d-flex justify-content-between">
            Presupuesto:{' '}
            <span className="fw-bold text-dark">
              {formatCurrency(presupuesto)}
            </span>
          </li>
          <li className="list-group-item text-primary d-flex justify-content-between">
            Disponible:{' '}
            <span className="fw-bold" style={{ color: color }}>
              {formatCurrency(disponible)}
            </span>
          </li>
          <li className="list-group-item text-primary d-flex justify-content-between">
            Gastado:{' '}
            <span className="fw-bold" style={{ color: color }}>
              {formatCurrency(gastado)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
