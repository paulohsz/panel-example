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
import FormCreate from "./FormCreate";

const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ListMain() {
  const { enqueueSnackbar } = useSnackbar();

  const [listMedicine, setListMedicine] = useState([]);
  const [values, setValues] = useState({
    openDialog: false,
    openDialogUpdate: false,
    openBackDrop: false,
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

  const handleUpdate = (medicine => {
    setValues({...values, openDialogUpdate: true});
  })

  const handleDelete = (medicine) => {
    setValues({ ...values, openDialog: true, medicineDelete: medicine });
  };

  const handleConfirmDelete = async () => {
    setValues({ ...values, openDialog: false, openBackDrop: true });
    await PharmacyAPI.deleteMedicine(values.medicineDelete.id).then(
      (response) => {
        if (response.success) {

          console.log("Sucess Delete!");
          console.log(response);

          setListMedicine(listMedicine.filter((medicine) => medicine.id !== values.medicineDelete.id));

          enqueueSnackbar("Successfully deleted", { variant: "success" });

          setValues({
            ...values,
            openDialog: false,
            openBackDrop: false,
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
          enqueueSnackbar(errorShow, { variant: "error" });
          setValues({
            ...values,
            openDialog: false,
            openBackDrop: false,
            medicineDelete: { compostos: [] },
          });
          console.log("Deu ruim!");
          console.log(response.error);
        }
      }
    );
  };

  const handleCloseDialog = () => {
    setValues({ ...values, openDialog: false });
  };
  const handleCloseDialogUpdate = () => {
    setValues({ ...values, openDialogUpdate: false });
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
            <Button color="primary" onClick={() => handleUpdate()}>
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
              <TheMedicine medicine={medicine} onDelete={handleDelete} onUpdate={handleUpdate} />
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
        <DialogTitle>
          Confirm delete?
          <Divider />
        </DialogTitle>

        <DialogContent>
          <TheMedicine medicine={values.medicineDelete} dialog />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Disagree
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={values.openDialogUpdate}
        TransitionComponent={TransitionUp}
        
        maxWidth="md"
        onClose={handleCloseDialogUpdate}
      >
        <FormCreate onClose={handleCloseDialogUpdate}/>
      </Dialog>

      <Backdrop
        style={{ zIndex: 100, color: "#fff" }}
        open={values.openBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
//<pre>{JSON.stringify(values, null, 2)}</pre>
export default ListMain;
