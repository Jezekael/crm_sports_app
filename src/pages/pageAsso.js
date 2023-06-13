import React, { useState } from "react";
import moment from "moment";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
  useTheme
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "react-big-calendar/lib/css/react-big-calendar.css";

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

//news
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { user } from "./../data/userInfo";
import { asso } from "./../data/assoInfo";

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

function CalendarDisplay() {
  const theme = useTheme();

  const getAllDayMessages = (locale) => localizationMessages[locale];
  const getWeekMessages = (locale) => localizationMessages[locale]["week"];
  const getDayMessages = (locale) => localizationMessages[locale]["day"];

  return (
    <>
      <h2 style={{ color: theme.palette.primary.main }}>Calendar</h2>
      <Paper>
        <Scheduler
          data={user["rdv"]}
          locale={locale}
          height={600}
          adaptivityEnabled={true}
        >
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
    </>
  );
}

function MemberDisplay() {
  const theme = useTheme();

  const Members = [
    { name: "Benoit" },
    { name: "Lucas" },
    { name: "Maiwenn" },
    { name: "Jezekael" },
    { name: "Abdel" }
  ];

  const listStyle = {
    width: "max-content",
    maxWidth: 360,
    bgcolor: theme.palette.secondary.variant,
    color: theme.palette.primary.variant
  };

  return (
    <>
      <h2 style={{ color: theme.palette.primary.main }}>Members</h2>
      <List sx={listStyle}>
        {Members.map((member) => (
          <>
            <ListItem>
              <AccountCircleIcon />
              <ListItemText primary={member.name} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
}

function NewsDisplay() {
  const theme = useTheme();
  const steps = asso["info"];
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const newStyle = {
    padding: "10px",
    backgroundColor: theme.palette.secondary.variant,
    color: theme.palette.primary.variant
  };

  const news = [
    { title: "News 1", content: "News 1 content" },
    { title: "News 2", content: "News 2 content" }
  ];

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
    <>
      <h2 style={{ color: theme.palette.primary.main }}>News</h2>
      <Box borderColor={blue[200]} sx={{ maxWidth: 1440, flexGrow: 0 }}>
        <Paper
          square
          elevation={2}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: theme.palette.secondary.variant
          }}
        >
          <Typography
            sx={{ fontFamily: "Inter", color: theme.palette.primary.variant }}
          >
            {steps[activeStep]["title"]}
          </Typography>
        </Paper>
        <Box
          component="div"
          sx={{
            height: 100,
            maxWidth: 1440,
            width: "90%",
            p: 2,
            overflow: "hidden",
            overflowY: "scroll",
            fontFamily: "Inter",
            border: 2,
            borderColor: theme.palette.secondary.variant
          }}
        >
          {steps[activeStep]["text"]}
        </Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ bgcolor: theme.palette.secondary.variant }}
          nextButton={
            <Button
              sx={{ color: theme.palette.primary.variant, fontFamily: "Inter" }}
              size="small"
              onClick={handleNext}
            >
              {localizationMessages[locale]["next"]}
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              sx={{ color: theme.palette.primary.variant, fontFamily: "Inter" }}
              size="small"
              onClick={handleBack}
            >
              <KeyboardArrowLeft />
              {localizationMessages[locale]["back"]}
            </Button>
          }
        />
      </Box>
    </>
  );
}

function PageAsso() {
  const theme = useTheme();

  return (
    <div style={{ paddingLeft: "5vh", paddingRight: "5vh" }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <h1
            style={{
              marginLeft: -30,
              textAlign: "center",
              fontSize: 25,
              color: theme.palette.primary.variant
            }}
          >
            {asso["assoName"]}
          </h1>
          <Box
            component="div"
            ml={-5}
            sx={{
              height: 100,
              maxWidth: 1440,
              width: "90%",
              p: 2,
              overflow: "hidden",
              overflowY: "scroll",
              fontFamily: "Inter",
              border: 2,
              borderColor: theme.palette.secondary.variant
            }}
          >
            {asso["description"]}
          </Box>

          <text style={{ color: theme.palette.primary.variant }}></text>
        </Grid>
        <Grid item xs={8}>
          <NewsDisplay />
        </Grid>
        <Grid item xs={3}>
          <MemberDisplay />
        </Grid>
        <Grid item xs={9}>
          <CalendarDisplay />
        </Grid>
      </Grid>
    </div>
  );
}

export default PageAsso;
