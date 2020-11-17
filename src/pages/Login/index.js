import React from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import FormLogin from "../../components/forms/Login/FormLogin";

function Login() {
  const handleLogin = (username, password) => {
    const data = {
      email: username,
      password: password,
    };

    axios.post(`http://api2.gdteam.com.br/api/login`, data).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    return "Ok!";
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <FormLogin submitLogin={handleLogin} />
    </Box>
  );
}
//<pre>{JSON.stringify(values, null, 2)}</pre>
export default Login;
