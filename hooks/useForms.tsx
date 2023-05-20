import * as React from 'react';
import { useState } from 'react';

export const useForms = (initState: any) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData(initState);
  };

  return {
    ...formData,
    formData,
    // functions
    onChange,
    resetForm,
  };
};
