import * as React from 'react';
interface Props {
  msg: string;
  tipo: 'success' | 'warning' | 'danger';
}
export const Alert = ({ msg, tipo = 'success' }: Props) => {
  return <div className={`alert alert-${tipo} my-3`}>{msg}</div>;
};
