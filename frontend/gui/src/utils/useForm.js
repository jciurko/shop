import { useState } from "react";

const useForm = () => {
  const [username, setState] = useState({});

  const handleChange = (e) => {
    setState((username) => ({ ...username, [e.target.name]: e.target.value }));
  };

  return [username, handleChange];
};

export default useForm;
