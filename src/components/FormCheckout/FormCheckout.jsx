import { Grid, TextField, Button } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="Nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={1} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="Email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={1} sm={7}>
            <TextField
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
              fullWidth
              type="password"
              name="Contraseña"
              onChange={handleChange}
              error={errors.contraseña ? true : false}
              helperText={errors.contraseña}
            />
          </Grid>
          <Grid item xs={1} sm={7}>
            <TextField
              id="outlined-basic"
              label="Confirmar"
              variant="outlined"
              fullWidth
              type="password"
              name="confirmarContraseña"
              onChange={handleChange}
              error={errors.contraseña ? true : false}
              helperText={errors.contraseña}
            />
          </Grid>
          <Grid xs={5}>
            <Button
              type="submit "
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
