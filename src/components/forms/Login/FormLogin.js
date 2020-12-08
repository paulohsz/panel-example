import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function FormLogin({submitLogin}) {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = () => (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit!");
    console.log(submitLogin(values.username, values.password));
  };

  return (
    <Container maxWidth="xs">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Login - teste
          </Typography>
          <form action="/" onSubmit={handleSubmit}>
            <TextField
              label="Username"
              id="username"
              autoComplete="on"
              value={values.username}
              onChange={handleChange()}
              variant="outlined"
              fullWidth
            />

            <TextField
              id="password"
              label="Password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange()}
              autoComplete="current-password"
              variant="outlined"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default FormLogin;
