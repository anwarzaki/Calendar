export function groupEventsByDate(events) {
  return events.reduce((acc, event) => {
    const dateKey = new Date(event.date).toISOString();
    acc[dateKey] = acc[dateKey] || [];
    acc[dateKey].push(event);
    return acc;
  }, {});
}

export function formatEventTime(startTime, endTime) {
  return `${startTime} - ${endTime}`;
}