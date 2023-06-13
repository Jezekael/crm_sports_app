import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import Stack from "@mui/material/Stack";

import moment from "moment";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//Carousel

import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";

//Calendrier
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  DateNavigator,
  TodayButton,
  Toolbar,
  ViewSwitcher
} from "@devexpress/dx-react-scheduler-material-ui";
import Paper from "@mui/material/Paper";
import { appointments } from "./données/appointment";
import { user } from "./données/userInfo";

//Initialisation calendrier
const locale = user["locale"];
const localizationMessages = {
  "fr-FR": {
    today: "Aujourd'hui",
    week: "Semaine",
    day: "Jour",
    next: "Suivant",
    back: "Précédent"
  },
  "en-US": {
    today: "today",
    week: "Week",
    day: "Day",
    next: "Next",
    back: "Back"
  }
};

const getAllDayMessages = (locale) => localizationMessages[locale];
const getWeekMessages = (locale) => localizationMessages[locale]["week"];
const getDayMessages = (locale) => localizationMessages[locale]["day"];
const username = user["username"];

const steps = user["info"];

//Typo

const typoProperties = {
  mr: 2,
  fontSize: "h6.fontSize",
  display: { xs: "none", md: "flex" },
  fontFamily: "Inter",
  fontWeight: 500,
  letterSpacing: ".001rem",
  color: "#02016F",
  textDecoration: "none",
  textAlign: "right"
};
const typoPropertiesAs = {
  mr: 2,
  fontSize: "h5.fontSize",
  display: { xs: "none", md: "flex" },
  fontFamily: "Inter",
  letterSpacing: ".001rem",
  color: "#02016F",
  textAlign: "center",
  fontWeight: "bold"
};
const typoPropertiesDerInfo = {
  mr: 2,
  fontSize: "h5.fontSize",
  display: { xs: "none", md: "flex" },
  fontFamily: "Inter",
  letterSpacing: ".001rem",
  color: "#02016F",
  textAlign: "center",
  fontWeight: "bold"
};

const Dashboard = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const theme = useTheme();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(steps.length - 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={3}
        >
          <Avatar
            sx={{ width: 50, height: 50, bgcolor: blue[300], align: "center" }}
          >
            {username.split(" ")[0][0]}
          </Avatar>
          <br />
          <Box
            component="div"
            sx={{
              p: 1,
              fontFamily: "Inter",
              borderColor: "grey.300",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "h6.fontSize",
              letterSpacing: ".001rem",
              color: "#02016F",
              textAlign: "left"
            }}
          >
            {username}
          </Box>
        </Grid>
        <Grid xs={8}>
          <br />

          <Box
            component="div"
            sx={{
              p: 1,
              fontFamily: "Inter",
              borderColor: "grey.300",
              fontSize: "h5.fontSize",
              letterSpacing: ".001rem",
              color: "#02016F",
              textAlign: "left",
              fontWeight: "bold"
            }}
          >
            Dernières informations
          </Box>
          <Box borderColor={blue[200]} sx={{ maxWidth: 1440, flexGrow: 0 }}>
            <Paper
              square
              elevation={2}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: blue[200]
              }}
            >
              <Typography sx={{ fontFamily: "Inter" }}>
                {steps[activeStep]["title"]}
              </Typography>
            </Paper>
            <Box
              component="div"
              sx={{
                height: 40,
                maxWidth: 1440,
                width: "90%",
                p: 2,
                flexShrink: 1,
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontFamily: "Inter",
                borderColor: "grey.300"
              }}
            >
              {steps[activeStep]["text"]}
            </Box>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext}>
                  {localizationMessages[locale]["next"]}
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack}>
                  <KeyboardArrowLeft />
                  {localizationMessages[locale]["back"]}
                </Button>
              }
            />
          </Box>
        </Grid>
        <Grid xs={3}>
          <Box
            component="div"
            sx={{
              p: 1,
              fontFamily: "Inter",
              borderColor: "grey.300",
              fontSize: "h5.fontSize",
              letterSpacing: ".001rem",
              color: "#02016F",
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            Associations suivies
          </Box>
          <br />
          <Stack spacing={2}>
            {user["assoSuivies"].map((asso, index) => (
              <Button href={asso["lien"]}> {asso["nomAsso"]}</Button>
            ))}
          </Stack>
        </Grid>
        <Grid xs={8.5}>
          <Paper>
            <Scheduler data={user["rdv"]} locale={locale} height={600}>
              <ViewState defaultCurrentViewName={getWeekMessages(locale)} />
              <DayView
                name={getDayMessages(locale)}
                startDayHour={0}
                endDayHour={24}
              />
              <WeekView
                name={getWeekMessages(locale)}
                cellDuration={60}
                startDayHour={8}
                endDayHour={18}
              />
              <Toolbar />
              <ViewSwitcher />
              <DateNavigator />
              <TodayButton messages={getAllDayMessages(locale)} />
              <Appointments />
            </Scheduler>
          </Paper>
          <button>Ajouter un évènement</button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
