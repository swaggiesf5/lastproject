import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';




export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        
      </List>
      <Grid container spacing={2}>
        
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            
          </Typography>
          <Grid container>
    
    
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}