import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <Grid container spacing={3} >
      <Grid item xs={12}>
        <Grid xs display="flex" justifyContent="center">
          <Grid item>
            <Typography variant="h4">CRM Sport</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Paper>
          <Grid container justify="center">
            <Grid item>
              <Typography variant="body1">Holla les gars</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Grid container justify="center">
            <Grid item>
              <Typography variant="body1">Colonne droite</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h4">Contenu en bas</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;