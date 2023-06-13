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
import { user } from "./../data/userInfo";

function CalendarDisplay() {
  const theme = useTheme();

  const locale = user["locale"];
  const allDayLocalizationMessages = {
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
  const getAllDayMessages = (locale) => allDayLocalizationMessages[locale];
  const getWeekMessages = (locale) =>
    allDayLocalizationMessages[locale]["week"];
  const getDayMessages = (locale) => allDayLocalizationMessages[locale]["day"];

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
    width: "100%",
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

  const newStyle = {
    padding: "10px",
    backgroundColor: theme.palette.secondary.variant,
    color: theme.palette.primary.variant
  };

  const news = [
    { title: "News 1", content: "News 1 content" },
    { title: "News 2", content: "News 2 content" }
  ];

  return (
    <>
      <h2 style={{ color: theme.palette.primary.main }}>News</h2>
      <Stack
        direction="row-reverse"
        spacing={2}
        sx={{ width: "100%" }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {news.map((news) => (
          <>
            <div style={newStyle}>
              <h3>{news.title}</h3>
              <p>{news.content}</p>
            </div>
          </>
        ))}
      </Stack>
    </>
  );
}

function Dashboard() {
  const theme = useTheme();

  return (
    <div style={{ paddingLeft: "5vh", paddingRight: "5vh" }}>
      <h1 style={{ color: theme.palette.primary.main }}>Dashboard</h1>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <CalendarDisplay />
        </Grid>
        <Grid item xs={2}>
          <MemberDisplay />
        </Grid>
        <Grid item xs={6}>
          <NewsDisplay />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
