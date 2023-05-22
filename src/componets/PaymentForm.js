import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function VaccineForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose Vaccine
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="vaccine1" />}
            label="Vaccine 1"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="vaccine2" />}
            label="Vaccine 2"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="vaccine3" />}
            label="Vaccine 3"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="vaccine4" />}
            label="Vaccine 4"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
