import DayCell from "./DayCell";

export default function CalendarGrid({
  days,
  events,
  startDayIndex,
  isCurrentDay,
}) {
  return (
    <div className="grid grid-cols-7 bg-gray-50">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div
          key={day}
          className="py-2 text-center font-medium text-gray-600 bg-gray-100"
        >
          {day}
        </div>
      ))}

      {Array.from({ length: startDayIndex }).map((_, i) => (
        <div key={`empty-${i}`} className="min-h-[120px] bg-gray-50" />
      ))}

      {days.map((day) => (
        <DayCell
          key={day.toString()}
          day={day}
          events={events[day.toISOString()] || []}
          isToday={isCurrentDay(day)}
        />
      ))}
    </div>
  );
}
