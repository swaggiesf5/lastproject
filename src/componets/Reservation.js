import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

function Reservation() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location = '/SignIn';
      return;
    }

    fetch('https://long-pink-leopard-fez.cyclic.app/authen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then((data) => {
        console.log(data);
        if (data.status === 'OK') {
          // Authentication success
        } else {
          // Authentication failed
          window.location = '/SignIn';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Authentication failed');
        localStorage.removeItem('token');
        window.location = '/SignIn';
      });
  }, []);

  const handleFormSubmit = () => {
    const chosenHospital = document.getElementById('choose-hospital').value;
    const selectedVaccines = Array.from(document.querySelectorAll('input[name^="vaccine"]:checked')).map(
      (input) => input.name
    );

    // Make a request to update the reservation
    const id = localStorage.getItem('id');
    const payload = {
      id,
      hospital: chosenHospital,
      vaccines: selectedVaccines,
    };

    fetch(`https://long-pink-leopard-fez.cyclic.app/id/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          // Reservation updated successfully
          alert('Reservation updated successfully');
        } else {
          // Error occurred during reservation update
          alert('Error updating reservation');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error updating reservation');
      });
  };

  const [hospitalOptions, setHospitalOptions] = useState([]);
  useEffect(() => {
    // Simulating fetching hospital options from the server
    setHospitalOptions(['Hospital 1', 'Hospital 2']);
  }, []);

  return (
    <ThemeProvider theme={createTheme()}>
      <AppBar position="absolute" color="default" elevation={0}>
        {/* ... */}
      </AppBar>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Reservation
          </Typography>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Choose Hospital
                </Typography>
                <Autocomplete
                  required
                  id="choose-hospital"
                  options={hospitalOptions}
                  renderInput={(params) => (
                    <TextField {...params} label="Choose Hospital" fullWidth />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Choose Vaccine
                </Typography>
                <Grid container spacing={2}>
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
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>
              Submit
            </Button>
          </Paper>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1"></Typography>
            <Typography variant="body2" color="text.secondary">
              {'Copyright © '}
              <Link color="inherit" href="https://mui.com/">
                Your Website
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Reservation;
