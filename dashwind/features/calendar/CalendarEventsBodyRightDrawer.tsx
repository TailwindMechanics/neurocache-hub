//path: src\app\features\calendar\CalendarEventsBodyRightDrawer.tsx

import { CALENDAR_EVENT_STYLE } from 'dashwind/CalendarView/util';
import { FC } from 'react';

type Theme = 'BLUE' | 'GREEN' | 'PURPLE' | 'ORANGE' | 'PINK' | 'MORE';

interface Event {
    title: string;
    theme: Theme;
}

interface CalendarEventsBodyRightDrawerProps {
    filteredEvents: Event[];
}

const THEME_BG = CALENDAR_EVENT_STYLE;

const CalendarEventsBodyRightDrawer: FC<CalendarEventsBodyRightDrawerProps> = ({ filteredEvents }) => {
    return <>
        {filteredEvents.map((e, k) => {
            return (
                <div key={k} className={`grid mt-3 card rounded-box p-3 ${THEME_BG[e.theme] || ""}`}>
                    {e.title}
                </div>
            );
        })}
    </>
}

export default CalendarEventsBodyRightDrawer;
