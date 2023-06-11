import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import "@fontsource/inter";

const typoProperties = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'Inter',
  fontWeight: 500,
  letterSpacing: '.001rem',
  color: '#02016F',
  textDecoration: 'none'
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#02016F',
}));

function Home() {
  return (
    <Grid container spacing={3} style={{ backgroundColor: '#f6f7ff' }}>
      <Grid item xs={12} style={{ padding: '75px 130px' }}>
        <Grid xs display="flex" >
          <Grid item>
            <Grow style={{ transformOrigin: '0 0 0' }} in={true} timeout={2000} >
              {/* <Slide direction="up" in={true} timeout={1000}> */}

              <Typography
                variant="h4"
                noWrap
                sx={typoProperties}
              >
                Mettez en avant votre maitrise du sport<br />
                Powered by CRM Sport
              </Typography>

              {/* </Slide> */}
            </Grow>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} style={{ padding: '0px 130px' }}>
        <Grid container justify="center">
          <Grid item>
            <Grow style={{ transformOrigin: '0 0 0' }} in={true} timeout={2000} >
              <Typography variant="subtitle1" sx={typoProperties} >
                Sans cesse, nous devons nous surpasser, car c'est maintenant que la maîtrise du sport est la plus importante.
                C'est maintenant que nous devons nous dépasser et c'est maintenant que nous devons nous surpasser.
                Prenez en mains votre futur et devenez le meilleur. <br />
                Avec CRM Sport, vous pourrez gérer votre club de sport comme un professionnel.
              </Typography>
            </Grow>
          </Grid>
        </Grid>
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

      <Grid item xs={12} style={{ padding: '30px 130px' }}>
        <Typography variant="h4" sx={typoProperties} justifyContent={"center"} >Nos fonctionnalités</Typography>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}

export default Home;