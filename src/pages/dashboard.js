import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { List, ListItem, ListItemText, Divider, Stack, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);    

class CalendarDisplay extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
        <>
            <h2>Calendar</h2>
            <Grid container spacing={2}>
                <Grid item xs={1}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                </Grid>
                <Grid item xs={11}>
                <Grid xs display="flex">
                    <Grid item>
                    <div className="calendarStyle">
                        <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        style={{ height: "50vh" }}
                        />
                    </div>
                    </Grid>
                </Grid>
                </Grid >
            </Grid >
      </>
    );
  }
}

function MemberDisplay() {
    const theme = useTheme();

    const Members = [
    { name: 'Benoit' },
    { name: 'Lucas' },
    { name: 'Maiwenn' },
    { name: 'Jezekael' },
    { name: 'Abdel' },
    ];

    const listStyle = {
        width: '100%',
        maxWidth: 360,
        bgcolor: theme.palette.background.secondary,
      };
    
    return (
        <>
            <h2>Members</h2>
            <List sx={listStyle}>
                {Members.map ((member) => (
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
        backgroundColor: theme.palette.background.secondary,
        padding: '10px'
    };

    const news = [
        { title: 'News 1', content: 'News 1 content' },
        { title: 'News 2', content: 'News 2 content' },
    ];

    return (
        <>
            <h2>News</h2>
            <Stack 
                direction="row-reverse"
                spacing={2}
                sx={{ width: '100%' }}
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
    return (
        <>
            <h1>Dashboard</h1>
            <Grid container spacing={2}>
                <Grid xs={9}>
                    <CalendarDisplay />
                </Grid>
                <Grid xs spacing={10}>
                    <MemberDisplay />
                </Grid>
                <Grid xs={12}>
                    <NewsDisplay />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard
