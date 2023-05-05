import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventInput, formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { DateSpan } from "@fullcalendar/common";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/header/header";
import { tokens } from "../../theme/theme";

interface CalendarEvent extends EventInput {
  id: string;
}

const Calendar: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<CalendarEvent[]>([]);

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event ");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delent the event ${selected.event.title}?`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title={"CALENDAR "} subtitle={"Full Calendar interactive page"} />
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          flex={"1 1 20%"}
          sx={{ backgroundColor: colors.primary[400] }}
          p="20px"
          borderRadius={"4px"}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {event.start &&
                        formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={"1 1 100%"} ml="15px">
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events as CalendarEvent[])}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2023-05-05" },
              { id: "5678", title: "All-day event", date: "2023-05-05" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
