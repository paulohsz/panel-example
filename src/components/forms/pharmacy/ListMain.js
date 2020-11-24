import React, { useEffect, useState } from "react";

import * as PharmacyAPI from "../../../services/PharmacyAPI";

import {
  Box,
  Container,
  Button,
  Grid,
  //TextField,
  //Tooltip,
  Typography,
  Divider,
  IconButton,
  List,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";

function ListMain() {

  const [values, setValues] = useState({
    listMedicine: [],
  });

  useEffect(() => {
    async function loadMedicine() {
      const response = await PharmacyAPI.loadMedicine();

      if (response.success) {
        setValues({...values, listMedicine: response.payload});
        console.log("Sucess load!");
        console.log(response);
        //this.props.dispatch({type: "SORT", field: "fabricante"});
      } else {
        console.log(response.error);
      }
    }

    loadMedicine();
  }, []); /*
        console.log("Cadastrado com suceso!");
        console.log(action);
        return "OK";
      } else {*/ /*

        console.log("Deu ruim!");
        console.log(error.errorMsg);

        return error.errorMsg;
      }
    } catch (e) {
      console.log("Não pude executar a request");
    }
  };*/ /*const [values, setValues] = useState({
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
  });*/

  /*
  const handleSubmitCreate = async (medicine) => {
    try {
      const { success, action, error } = await PharmacyAPI.createMedicine(
        medicine
      );

      if (success) {*/ /*const handleChange = () => (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };*/

  /*const getMedicine = () => {
    return {
      nome: values.name,
      fabricante: values.fabricante,
      descricao: values.descricao,
      observacao: values.observacao,
      compostos: values.compostos,
    };
  };*/

  /*const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submit!");

    const medicine = getMedicine();

    console.log(medicine);

    handleSubmitCreate(medicine);
  };*/

  /*const handleAddFields = () => {
    const valuesCompostos = [...values.compostos];
    valuesCompostos.push({ nome: "", quantidade: "" });
    console.log(valuesCompostos);
    setValues({ ...values, compostos: valuesCompostos });
  };

  const handleRemoveFields = (index) => {
    const valuesCompostos = [...values.compostos];
    valuesCompostos.splice(index, 1);
    setValues({ ...values, compostos: valuesCompostos });
  };*/
  /*
  const handleCompostoChange = (index, event) => {
    const valuesCompostos = [...values.compostos];
    const { id, value } = event.target;
*/
  /*
    if (index === 0) {
      this.handleValidInputs(`compostos${this.CapitalizeFirstLetter(id)}`, value);
    }*/
  /*
    if (id === "nome") {
      valuesCompostos[index].nome = value;
    } else {
      valuesCompostos[index].quantidade = value;
    }

    setValues({ ...values, compostos: valuesCompostos });
  };
*/ /*this.props.dispatch(action);
        this.setState({
          openSnackBar: true,
          messageSnackBarA: "Successfully created",
          messageSnackBarB: "",
          alertSnackBar: "success",
        });*/ /*(error.errorStatus === 422) ?
        this.setState({
          messageSnackBarA: "Check the form",
          messageSnackBarB: "",
          alertSnackBar: "warning",
        })
        : this.setState({
          messageSnackBarA: error.errorMsgGeneral,
          messageSnackBarB: "",
          alertSnackBar: "error",
        });

        this.setState({openSnackBar: true});
        */ return (
    <Container maxWidth="md">
      <Box
        border={1}
        boxShadow={1}
        borderRadius={16}
        borderColor="grey.300"
        bgcolor="background.paper"
        m={1}
        p={1}
      >
        <Grid container justify="space-between" alignItems="center" m={5}>
          <Grid></Grid>
          <Grid>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Register Medicine
            </Typography>
          </Grid>
          <Grid>
            <Button color="primary">
              <AddCircleOutline /> Create
            </Button>
          </Grid>
        </Grid>
        <Box pt={2}>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={3} align="center">
              Nome
            </Grid>

            <Grid item xs={3} align="center">
              Fabricante
            </Grid>

            <Grid item xs={4} align="left">
              Compostos
            </Grid>

            <Grid item xs={2} align="left">
              Açōes
            </Grid>
          </Grid>
          <Divider />
          <Grid
            container
            spacing={0}
            alignItems="center"
            justify="space-between"
          >
            <Grid item xs={3} align="center">
              {
                //medicine.nome
              }
              Tandrilax
            </Grid>

            <Grid item xs={3} align="center">
              {
                //medicine.fabricante
              }
              Aché
            </Grid>

            <Grid item xs={4} align="left">
              <List>
                {[
                  { nome: "Cafeína", quantidade: "30 mg" },
                  { nome: "Paracetamol", quantidade: "300 mg" },
                  { nome: "Diclofenaco Sódico", quantidade: "50 mg" },
                  { nome: "Carisoprodol", quantidade: "125 mg" },
                ].map((composto, index) => (
                  <li key={index}>
                    {composto.nome} {composto.quantidade}
                  </li>
                ))}
              </List>
            </Grid>
            <Grid item md={2} xs={2} align="center">
              <div>
                <IconButton
                  aria-label="Delete"
                  onClick={() => this.props.onDelete(this.props.medicine)}
                >
                  <DeleteIcon />
                </IconButton>

                <IconButton
                  aria-label="Edit"
                  onClick={() => this.props.onUpdate(this.props.medicine.id)}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
//<pre>{JSON.stringify(values, null, 2)}</pre>
export default ListMain;
