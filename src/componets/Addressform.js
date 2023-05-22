import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function AddressForm() {
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
            options={['Hospital A', 'Hospital B', 'Hospital C']}
            renderInput={(params) => (
              <TextField {...params} label="Choose Hospital" />
            )}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Date Field */}

        </Grid>
        {/* The remaining Grid items */}
        {/* ... */}
      </Grid>
    </React.Fragment>
  );
}
