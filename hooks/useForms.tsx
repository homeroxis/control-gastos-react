import * as React from 'react';
import { useState } from 'react';

export const useForms = (initState) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    ...formData,
    setFormData,
    formData,
    // functions
    onChange,
  };
};
