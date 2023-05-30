import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import "@fontsource/inter";

function Home() {
  return (
    <Grid container spacing={3} style={{ backgroundColor: '#f6f7ff' }}>
      <Grid item xs={6} style={{ padding: '50px 100px' }}>
        <Grid xs display="flex" >
          <Grid item>
            <Grow
              style={{ transformOrigin: '0 0 0' }}
              in={true}
              timeout={1000}
            >
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  letterSpacing: '.001rem',
                  color: '#02016F',
                  textDecoration: 'none',
                }}
              >
                CRM Sport
                <Typography
                  variant="body1"
                >
                  Lorem ipsum dolor
                </Typography>
              </Typography>


            </Grow>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} style={{ padding: '50px 0' }}>
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
    </Grid >
  );
}

export default Home;