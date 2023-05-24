import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  const [hospitalOptions, setHospitalOptions] = useState([]);
  useEffect(() => {
    setHospitalOptions(["Hospital 1", "Hospital 2"]);
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose Hospital
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* Hospital Field */}
          <Autocomplete
            required
            id="choose-hospital"
            options={hospitalOptions}
            renderInput={(params) => (
              <TextField {...params} label="Choose Hospital" />
            )}
            fullWidth
          />
        </Grid>

      </Grid>
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
