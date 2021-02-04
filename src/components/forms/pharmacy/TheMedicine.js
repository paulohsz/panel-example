import React from "react";

import {
  Grid,
  IconButton,
  List,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function TheMedicine({ medicine, dialog, onDelete, onUpdate }) {

  return (
    <Grid container spacing={0} alignItems="center" justify="space-between">
      <Grid item xs={3} align="center">
        {medicine.nome}
      </Grid>

      <Grid item xs={3} align="center">
        {medicine.fabricante}
      </Grid>

      <Grid item xs={dialog ? 6 : 4} align="left">
        <List>
          {medicine.compostos.map((composto, index) => (
            <li key={index}>
              {composto.nome} {composto.quantidade}
            </li>
          ))}
        </List>
      </Grid>
      {!dialog && (
      <Grid item md={2} xs={2} align="center">
        <div>
          <IconButton
            aria-label="Delete"
            onClick={() => onDelete(medicine)}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton
            aria-label="Edit"
            onClick={() => onUpdate(medicine)}
          >
            <EditIcon />
          </IconButton>
        </div>
      </Grid>
                  )}
    </Grid>
  );
}

export default TheMedicine;
