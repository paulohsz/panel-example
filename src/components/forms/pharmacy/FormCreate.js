import React, { useState, Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";

import AddBox from "@material-ui/icons/AddBox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {DividerCompostos} from "./styles";

function FormCreate() {
  const [values, setValues] = useState({
    name: "",
    fabricante: "",
    descricao: "",
    observacao: "",
    compostos: [{ nome: "", quantidade: "" }],
    errors: {
      nome: "",
      compostosNome: "",
      compostosQuantidade: "",
    },
  });

  const handleChange = () => (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit!");
    //console.log(submitLogin(values.username, values.password));
  };

  const handleAddFields = () => {
    const valuesCompostos = [...values.compostos];
    valuesCompostos.push({ nome: "", quantidade: "" });
    console.log(valuesCompostos);
    setValues({ ...values, compostos: valuesCompostos });
  };

  const handleRemoveFields = (index) => {
    const valuesCompostos = [...values.compostos];
    valuesCompostos.splice(index, 1);
    setValues({ ...values, compostos: valuesCompostos });
  };

  const handleCompostoChange = (index, event) => {
    const valuesCompostos = [...values.compostos];
    const { id, value } = event.target;

    /*if (index === 0) {
      this.handleValidInputs(`compostos${this.CapitalizeFirstLetter(id)}`, value);
    }*/

    if (id === "nome") {
      valuesCompostos[index].nome = value;
    } else {
      valuesCompostos[index].quantidade = value;
    }

    setValues({ ...values, compostos: valuesCompostos });
  };

  return (
    <Container maxWidth="md">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Register Medicine
          </Typography>
          <form action="/" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              id="name"
              required
              value={values.name}
              onChange={handleChange()}
              variant="outlined"
              size="small"
              margin="normal"
              fullWidth
            />

            <TextField
              label="Fabricante"
              id="fabricante"
              value={values.fabricante}
              onChange={handleChange()}
              variant="outlined"
              size="small"
              margin="normal"
              fullWidth
            />

            <TextField
              label="Descrição"
              id="descricao"
              value={values.descricao}
              onChange={handleChange()}
              variant="outlined"
              size="small"
              margin="normal"
              multiline
              rowsMax={6}
              fullWidth
            />

            <TextField
              label="Observação"
              id="observacao"
              value={values.observacao}
              onChange={handleChange()}
              variant="outlined"
              size="small"
              margin="normal"
              multiline
              rowsMax={3}
              fullWidth
            />

            <Box
              borderRadius={16}
              bgcolor="background.paper"
              borderColor="grey.500"
              m={1}
              border={1}
              p={1}
            >
              <Typography gutterBottom component="h1" variant="h5" align="center">
                Composição -                
                <Tooltip title="Adicionar Composto">
                  <Button endIcon={<AddBox />} onClick={handleAddFields}>
                    Add
                  </Button>
                </Tooltip>
              </Typography>

                {values.compostos.map((inputField, index) => (
                  <Fragment key={`${inputField}~${index}`} >
                    {index > 0 && <DividerCompostos p={2} />}

                    <Grid container spacing={2} alignItems="center"> 
                      <Grid container item  md={11} xs={10} justify="space-evenly" spacing={2}>
                        <Grid item xs={12} md={6} >
                          <TextField
                            required={index === 0 ? true : false}
                            id="nome"
                            label="Nome"
                            value={inputField.nome}
                            variant="outlined"
                            size="small"
                            fullWidth
                            onChange={(event) =>
                              handleCompostoChange(index, event)
                            }
                            error={
                              index > 0
                                ? false
                                : values.errors.compostosNome
                                  ? true
                                  : false
                            }
                            helperText={
                              index === 0 ? values.errors.compostosNome : ""
                            }
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <TextField
                            required={index === 0 ? true : false}
                            id="quantidade"
                            label="Quantidade"
                            value={inputField.quantidade}
                            variant="outlined"
                            size="small"
                            fullWidth
                            onChange={(event) =>
                              handleCompostoChange(index, event)
                            }
                            error={
                              index > 0
                                ? false
                                : values.errors.compostosQuantidade
                                  ? true
                                  : false
                            }
                            helperText={
                              index === 0
                                ? values.errors.compostosQuantidade
                                : ""
                            }
                          />
                          </Grid>
                        </Grid>
                      
                      <Grid item md={1} xs={2}>
                          <IconButton
                            aria-label="Deletar"
                            onClick={() => handleRemoveFields(index)}
                            disabled={(index > 0 ) ? false : true }
                          >
                            <DeleteIcon />
                          </IconButton>
                      </Grid>
                    </Grid>
                  </Fragment>
                ))}
            </Box>

            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </Container>
  );
}

export default FormCreate;