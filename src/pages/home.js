import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import "@fontsource/inter";


import GroupsIcon from '@mui/icons-material/Groups';
import MailIcon from '@mui/icons-material/Mail';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EuroIcon from '@mui/icons-material/Euro';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import TerminalIcon from '@mui/icons-material/Terminal';

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

const iconsFunctionalities =
  [GroupsIcon,
    MailIcon,
    EditCalendarIcon,
    EuroIcon,
    SportsKabaddiIcon,
    AccountBalanceIcon,
    MonitorWeightIcon,
    TerminalIcon];

const textFunctionalities =
  ["Gestion des adhérants",
    "Messagerie de club",
    "Gestion des évènements",
    "Gestion des cotisations",
    "Gestion des compétitions",
    "Gestion du bugdet",
    "Gestion des catégories",
    "Gestion du club"];

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

      <Box sx={{ flexGrow: 1 }} style={{ padding: '30px 130px' }}>
        <Grow style={{ transformOrigin: '0 0 0' }} in={true} timeout={2000} >
          <Grid item xs={12} style={{ padding: '30px 130px' }}>
            <Typography variant="h4" sx={typoProperties} justifyContent={"center"} >Nos fonctionnalités</Typography>
          </Grid>
        </Grow>
        <Grow style={{ transformOrigin: '0 0 0' }} in={true} timeout={2000} >
          <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 4, md: 16 }}>
            {iconsFunctionalities.map((Icon, index) => (
              <Grid xs={1} sm={4} md={4} key={index}>
                <Item>
                  <Icon key={index} sx={{ fontSize: 40 }} />
                  <Typography variant="subtitle1" sx={{ fontFamily: 'Inter', fontWeight: 500, letterSpacing: '.001rem', color: '#02016F', textDecoration: 'none' }} >
                    {textFunctionalities[index]}
                  </Typography>

                </Item>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </Box >
    </Grid >

  );
}

export default Home;