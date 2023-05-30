import * as React from 'react';
import { Page, Eventcalendar, getJson, Toast, localeFr } from '@mobiscroll/react';

function App() {

    const [myEvents, setEvents] = React.useState([]);
    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastText, setToastText] = React.useState();

    const closeToast = React.useCallback(() => {
        setToastOpen(false);
    }, []);

    const onEventClick = React.useCallback((event) => {
        setToastText(event.event.title);
        setToastOpen(true);
    }, []);

    const view = React.useMemo(() => {
        return {
            calendar: { labels: true }
        };
    }, []);

    return <Page>
        <Eventcalendar
            locale={localeFr}
            theme="ios"
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
        />
        <Toast
            message={toastText}
            isOpen={isToastOpen}
            onClose={closeToast}
        />
    </Page>
}

export default App;