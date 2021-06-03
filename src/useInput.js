import { useState } from "react";

export const useInput = (props) => {
  const [inputs, setİnputs] = useState(props);

  const handleChange = (e) => {
    setİnputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return [inputs, handleChange];
};
