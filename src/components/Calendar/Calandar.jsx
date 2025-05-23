import useCalendar from "../../hooks/useCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import { groupEventsByDate } from "../../utils/eventUtils";
import { events } from "../../data/events";

export default function Calendar() {
  const {
    currentDate,
    daysInMonth,
    startDayIndex,
    navigate,
    isCurrentDay,
    formatDate,
  } = useCalendar();

  const groupedEvents = groupEventsByDate(events);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <CalendarHeader
        monthTitle={formatDate(currentDate)}
        onPrev={navigate.prev}
        onNext={navigate.next}
        onToday={navigate.today}
      />
      <CalendarGrid
        days={daysInMonth}
        events={groupedEvents}
        startDayIndex={startDayIndex}
        isCurrentDay={isCurrentDay}
      />
    </div>
  );
}
