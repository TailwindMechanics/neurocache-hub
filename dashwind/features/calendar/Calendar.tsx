//path: src\app\features\calendar\Calendar.tsx

import { useState, FC } from 'react'
import moment, { Moment } from 'moment'
import { useDispatch } from 'react-redux'

import { CALENDAR_INITIAL_EVENTS } from '../../utils/dummyData'
import { openRightDrawer } from '../common/rightDrawerSlice'
import { RIGHT_DRAWER_TYPES } from '../../utils/globalConstantUtil'
import { showNotification } from '../common/headerSlice'
import CalendarView from 'dashwind/CalendarView/calendarView'

interface Event {
  title: string;
  theme: string;
  startTime: Moment;
  endTime: Moment;
}

interface DayDetail {
  filteredEvents: Event[];
  title: string;
}

const INITIAL_EVENTS: Event[] = CALENDAR_INITIAL_EVENTS;

const Calendar: FC = () => {
  const dispatch = useDispatch()
  const [events, setEvents] = useState<Event[]>(INITIAL_EVENTS)

  const addNewEvent = (date?: string | number | Date) => {
    let randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * INITIAL_EVENTS.length)]
    let newEventObj: Event = {
      title : randomEvent.title,
      theme : randomEvent.theme,
      startTime : moment(date || new Date()).startOf('day'),
      endTime : moment(date || new Date()).endOf('day')
    }
    setEvents([...events, newEventObj])
    dispatch(showNotification({message : "New Event Added!", status : 1}))
  }  

  const openDayDetail = ({filteredEvents, title}: DayDetail) => {
    dispatch(openRightDrawer({header : title, bodyType : RIGHT_DRAWER_TYPES.CALENDAR_EVENTS, extraObject : {filteredEvents}}))
  }

  return(
    <>
      <CalendarView 
        calendarEvents={events}
        addNewEvent={addNewEvent}
        openDayDetail={openDayDetail}
      />
    </>
  )
}

export default Calendar
