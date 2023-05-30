// import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import Grid from '@mui/material/Unstable_Grid2';

// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);

// class App extends Component {
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment()
//           .add(1, "days")
//           .toDate(),
//         title: "Some title"
//       }
//     ]
//   };

//   render() {
//     return (
//       <Grid container spacing={3}>
//         <Grid item xs={6}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//         </Grid>
//         <Grid item xs={6}>
//           <Grid xs display="flex">
//             <Grid item>
//               <div className="calendarStyle">
//                 <Calendar
//                   localizer={localizer}
//                   defaultDate={new Date()}
//                   defaultView="month"
//                   events={this.state.events}
//                   style={{ height: "50vh" }}
//                 />
//               </div>
//             </Grid>
//           </Grid>
//         </Grid >
//       </Grid >
//     );
//   }
// }

// export default App;

import * as React from 'react';
import { Eventcalendar } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Grid } from '@mui/material';
import { GridOnSharp } from '@mui/icons-material';

function pageCalendar() {
  return (
    <Grid container spacing={3} >
      <Grid item xs={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
      </Grid>

      <Grid item xs={6}>
        <Grid xs display="flex">
          <Grid item>
            <Eventcalendar
              data={[{
                start: new Date(),
                title: 'Today\'s event'
              }, {
                start: new Date(2020, 11, 18, 9, 0),
                end: new Date(2020, 11, 20, 13, 0),
                title: 'Multi day event'
              }]}
            />
          </Grid>
        </Grid>
      </Grid >
    </Grid >
  );
}

export default pageCalendar;