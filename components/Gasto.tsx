import * as React from 'react';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatCurrency, formatearFecha } from '../helpers';

export const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { nombre, cantidad, categoria, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(id)}>Eliminar</SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="card" style={{ width: '100%', clear: 'both' }}>
          <div className="card-header">
            <h5>{nombre}</h5>
          </div>
          <div className="card-body d-flex justify-content-between">
            <blockquote className="blockquote mb-0">
              <p>{categoria}</p>
              <footer className="blockquote-footer">
                {formatearFecha(fecha)}
              </footer>
            </blockquote>
            <div className="fw-bold text-primary">
              {formatCurrency(Number(cantidad))}
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
