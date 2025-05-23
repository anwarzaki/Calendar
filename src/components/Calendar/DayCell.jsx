import { format } from "date-fns";
import { hasTimeConflict } from "../../utils/eventUtils";

export default function DayCell({ day, events, isToday }) {
  const conflictExists = hasTimeConflict(events);

  return (
    <div
      className={`
      min-h-[120px] p-2 border border-gray-200
      ${isToday ? "bg-blue-50 ring-1 ring-blue-400" : "bg-white"}
      overflow-hidden hover:bg-gray-50 transition-colors
    `}
    >
      <div className="flex justify-between items-start">
        <span
          className={`
          text-sm font-medium
          ${isToday ? "text-blue-600" : "text-gray-700"}
        `}
        >
          {format(day, "d")}
        </span>
        {conflictExists && <span className="text-xs text-red-500">⚠️</span>}
      </div>

      <div className="mt-1 space-y-1 max-h-[80px] overflow-y-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="text-xs p-1 rounded truncate text-white"
            style={{ backgroundColor: event.color }}
            title={`${event.title} (${event.startTime}-${event.endTime})`}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
