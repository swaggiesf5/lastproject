import React,{ useState , useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserUpdate from './UserUpdate';


  
export default function User() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user/")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )
  }, [])
  const UserDelete = id => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": id
});
var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/user/delete", requestOptions)
  .then(response => response.json())
  .then(result => { alert(result['message'])})
  .catch(error => console.log('error', error));
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{p : 2}}>
        <Paper sx= {{p : 2}}>
        <Grid container spacing={2} >
            <Grid item xs={8}>
            <Typography variant="h6" gutterBottom>
                User
            </Typography>
            </Grid>
            <Grid item xs={2}>
            <Button variant="contained" Link href="/SignUp" >Create</Button>
            </Grid>
        </Grid>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Id Card</TableCell>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Phonenumber</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">BirthDate</TableCell>
            <TableCell align="right">Action</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.idcard}</TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.pnumber}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" onClick={()=> UserUpdate(row.id)} >
                      Update
                    </Button>
                    <Button variant="outlined" onClick={()=> UserDelete(row.id)}>
                    Delete
                    </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}