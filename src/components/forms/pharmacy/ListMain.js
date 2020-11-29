import React, { useEffect, useState } from "react";

import * as PharmacyAPI from "../../../services/PharmacyAPI";

import {
  Box,
  Container,
  Button,
  Grid,
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

import { useSnackbar } from "notistack";

import TheMedicine from "./TheMedicine";
import FormMedicine from "./FormMedicine";

const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ListMain() {
  const { enqueueSnackbar } = useSnackbar();

  const [listMedicine, setListMedicine] = useState([
    {
      id: "0",
      nome: "Loading...",
      fabricante: "Loading...",
      compostos: [{ nome: "Loading...", composto: "" }],
    },
  ]);

  const [openDialogForm, setOpenDialogForm] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);

  const [values, setValues] = useState({
    formMedicine: {},
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

  const handleUpdate = (idMedicine) => {
    setOpenDialogForm(true);
  };

  const handleFormCancel = () => {
    setOpenDialogForm(false);
    setValues({ ...values, formMedicine: {} });
  };

  const handleSubmitForm = (medicine) => {
    submitCreate(medicine);
  };

  const submitCreate = async (medicine) => {
    
    setOpenDialogForm(false);
    setOpenBackDrop(true);

    try {
      const { success, action, error } = await PharmacyAPI.createMedicine(
        medicine
      );

      if (success) {
        console.log("Cadastrado com sucesso!");
        console.log(action);

        setValues({ ...values, formMedicine: {} });
        setListMedicine([action.payload, ...listMedicine]);
        setOpenBackDrop(false);
        enqueueSnackbar("Successfully created", { variant: "success" });
      } else {
        if (error.errorStatus === 422) {
          enqueueSnackbar("Check the form", { variant: "warning" });
        } else {
          enqueueSnackbar(error.errorMsgGeneral, { variant: "error" });
        }

        setValues({ ...values, formMedicine: medicine });
        console.log("Deu ruim!");
        console.log(error.errorMsg);
        setOpenDialogForm(true);
        setOpenBackDrop(false);

        return error.errorMsg;
      }
    } catch (e) {
      console.log("Não pude executar a request");
    }
  };

  const handleDelete = (medicine) => {
    setOpenDialogDelete(true);
    setValues({ ...values, medicineDelete: medicine });
  };

  const handleConfirmDelete = async () => {
    setOpenDialogDelete(false);
    setOpenBackDrop(true);

    await PharmacyAPI.deleteMedicine(values.medicineDelete.id).then(
      (response) => {
        if (response.success) {
          console.log("Sucess Delete!");
          console.log(response);

          setListMedicine(
            listMedicine.filter(
              (medicine) => medicine.id !== values.medicineDelete.id
            )
          );

          setOpenBackDrop(false);
          enqueueSnackbar("Successfully deleted", { variant: "success" });
          setValues({
            ...values,
            medicineDelete: { compostos: [] },
          });
        } else {
          const errorShow =
            "Try again -- " +
            (response.error.errorMsg.Erro
              ? response.error.errorMsg.Erro +
                " -- " +
                response.error.errorMsgGeneral
              : response.error.errorMsgGeneral);

          setOpenBackDrop(false);
          enqueueSnackbar(errorShow, { variant: "error" });
          setValues({
            ...values,
            medicineDelete: { compostos: [] },
          });

          console.log("Deu ruim!");
          console.log(response.error);
        }
      }
    );
  };

  return (
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
              List Medicines
            </Typography>
          </Grid>
          <Grid>
            <Button color="primary" onClick={() => setOpenDialogForm(true)}>
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
              <TheMedicine
                medicine={medicine}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog
        open={openDialogDelete}
        TransitionComponent={TransitionUp}
        keepMounted
        fullWidth={true}
        onClose={() => setOpenDialogDelete(false)}
      >
        <DialogTitle>
          Confirm delete?
          <Divider />
        </DialogTitle>

        <DialogContent>
          <TheMedicine medicine={values.medicineDelete} dialog />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenDialogDelete(false)} color="primary">
            Disagree
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDialogForm}
        TransitionComponent={TransitionUp}
        maxWidth="md"
        onClose={handleFormCancel}
      >
        <FormMedicine
          onClose={handleFormCancel}
          onSubmit={handleSubmitForm}
          medicine={values.formMedicine}
        />
      </Dialog>

      <Backdrop style={{ zIndex: 100, color: "#fff" }} open={openBackDrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
//<pre>{JSON.stringify(values, null, 2)}</pre>
export default ListMain;
