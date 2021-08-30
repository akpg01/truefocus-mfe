import React, { useState } from "react";

export default (defaultData) => {
  const [formData, setFormData] = useState(defaultData);
  console.log("formData: ", defaultData);

  const setForm = (obj, value) => {
    setFormData((prevProps) => ({
      ...prevProps,
      [obj]: value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    console.log("in useForm -- data to be submitted: ", formData);
  };

  return [formData, setForm, submit];
};
