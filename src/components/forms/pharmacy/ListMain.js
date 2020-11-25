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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";

import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import TheMedicine from "./TheMedicine";

const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ListMain() {
  const [listMedicine, setListMedicine] = useState([]);
  const [values, setValues] = useState({
    openDialog: false,
    openBackDrop: true,
    medicineDelete: { compostos: [] },
  });

  useEffect(() => {
    async function loadMedicine() {
      const response = await PharmacyAPI.loadMedicine();

      if (response.success) {
        setListMedicine(response.payload);
        console.log("Sucess load!");
        console.log(response);
        //this.props.dispatch({type: "SORT", field: "fabricante"});
      } else {
        console.log(response.error);
      }
    }

    loadMedicine();
  }, []);

  const handleConfirmDelete = (medicine) => {
    setValues({ ...values, openDialog: true, medicineDelete: medicine });
  };

  const handleCloseDialog = (medicine) => {
    setValues({ ...values, openDialog: false });
  }; /*

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
  });*/ /*const handleChange = () => (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };*/ /*const getMedicine = () => {
    return {
      nome: values.name,
      fabricante: values.fabricante,
      descricao: values.descricao,
      observacao: values.observacao,
      compostos: values.compostos,
    };
  };*/ /*const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submit!");

    const medicine = getMedicine();

    console.log(medicine);

    handleSubmitCreate(medicine);
  };*/ /*const handleAddFields = () => {
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
        console.log("Cadastrado com suceso!");
        console.log(action);
        return "OK";
      } else {*/ /*
  const handleSubmitCreate = async (medicine) => {
    try {
      const { success, action, error } = await PharmacyAPI.createMedicine(
        medicine
      );

      if (success) {*/ /*
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
          {listMedicine.map((medicine, index) => (
            <Box key={medicine.id}>
              <Divider />
              <TheMedicine medicine={medicine} onDelete={handleConfirmDelete} />
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog
        open={values.openDialog}
        TransitionComponent={TransitionUp}
        keepMounted
        fullWidth={true}
        onClose={handleCloseDialog}
      >
        <DialogTitle id="alert-dialog-slide-title">
          Confirm delete?
          <Divider />
        </DialogTitle>

        <DialogContent>
          <TheMedicine
            medicine={values.medicineDelete}
            dialog
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Disagree
          </Button>
          <Button color="primary">Agree</Button>
        </DialogActions>
      </Dialog>

      <Backdrop
      style={{zIndex: 100,
        color: '#fff'}}
          open={values.openBackDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
    </Container>
  );
}
//<pre>{JSON.stringify(values, null, 2)}</pre>
export default ListMain;
