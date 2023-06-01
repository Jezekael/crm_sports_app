import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Grid from '@mui/material/Unstable_Grid2';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class App extends Component {
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
      <Grid container spacing={3}>
        <Grid item xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        </Grid>
        <Grid item xs={6}>
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

export default App;
