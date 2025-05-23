import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameDay,
  format,
  getDay,
} from "date-fns";

export default function useCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startDayIndex = getDay(monthStart);

  const navigate = {
    next: () => setCurrentDate(addMonths(currentDate, 1)),
    prev: () => setCurrentDate(subMonths(currentDate, 1)),
    today: () => setCurrentDate(new Date()),
  };

  return {
    currentDate,
    daysInMonth,
    startDayIndex,
    navigate,
    isCurrentDay: (day) => isSameDay(day, new Date()),
    formatDate: (date) => format(date, "MMMM yyyy"),
  };
}
