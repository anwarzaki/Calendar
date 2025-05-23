export function groupEventsByDate(events) {
  return events.reduce((acc, event) => {
    const dateKey = new Date(event.date).toISOString();
    acc[dateKey] = acc[dateKey] || [];
    acc[dateKey].push(event);
    return acc;
  }, {});
}

export function hasTimeConflict(events) {
  if (events.length < 2) return false;
  
  const sorted = [...events].sort((a, b) => a.startTime.localeCompare(b.startTime));
  
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].startTime < sorted[i-1].endTime) {
      return true;
    }
  }
  return false;
}