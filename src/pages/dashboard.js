import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import "react-big-calendar/lib/css/react-big-calendar.css";
// import { render } from "@testing-library/react";

const localizer = momentLocalizer(moment);

const listStyle = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

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
    );
  }
}

function MemberDisplay() {
    const Members = [
    { name: 'Benoit' },
    { name: 'Lucas' },
    { name: 'Maiwenn' },
    { name: 'Jezekael' },
    { name: 'Abdel' },
    ];

    
    return (
        <div>
            <h1>Members</h1>
            <List sx={listStyle}>
                {Members.map ((member) => (
                    <>
                        <ListItem>
                            <ListItemText primary={member.name} />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </div>
    );
}



const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Grid container spacing={2}>
                <Grid xs={10}>
                    <CalendarDisplay />
                </Grid>
                <Grid xs={2}>
                    <MemberDisplay />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
