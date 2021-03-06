import React, { useState, Fragment } from "react";

import {
  Box,
  Button,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";

import AddBox from "@material-ui/icons/AddBox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import {DividerCompostos} from "./styles";

function FormMedicine({onClose, onSubmit, medicine}) {
  
  const [values, setValues] = useState({
    name: medicine.nome ? medicine.nome : "",
    fabricante: medicine.fabricante ? medicine.fabricante : "",
    descricao: medicine.descricao ? medicine.descricao : "",
    observacao: medicine.observacao ? medicine.observacao : "",
    compostos: medicine.compostos ? medicine.compostos : [{ nome: "", quantidade: "" }],
    errors: {
      nome: "",
      compostosNome: "",
      compostosQuantidade: "",
    },
  });

  const handleChange = () => (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  const getMedicine = () => {
    return { 
      id: medicine.id ? medicine.id : null,
      nome: values.name, 
      fabricante: values.fabricante,
      descricao: values.descricao,
      observacao: values.observacao,
      compostos: values.compostos
    };
  }

  const handleSubmit =  async (event) => {
    event.preventDefault();
    
    console.log("Submit!");
    const medicine = getMedicine();
    await onSubmit(medicine).then(resp => {
      if (resp === ("success" || null)) {
        console.log(resp);
        return;
      }
      console.log(resp);
    });
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

    /*
    if (index === 0) {
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
      <Box p={2}>
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
              helperText={values.errors.nome}
              error={ values.errors.nome === "" ? false : true}
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
                      
                      <Grid item md={1} xs={2} align="center">
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
            <Typography  component="div" align="center">
            <Button type="submit" variant="contained" color="primary">
              { !medicine.id && `Register`}
              { medicine.id && `Update`}
            </Button>
            &nbsp;&nbsp;
            <Button
                variant="contained"
                color="primary"
                onClick={() => onClose()}
                >
                Cancel
              </Button>
            </Typography>
          </form>
        </Box>
  );
}

export default FormMedicine;
