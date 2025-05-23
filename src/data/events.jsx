export const events = [
  {
    id: '1',
    title: 'Team Standup',
    date: new Date().toISOString(),
    startTime: '10:00',
    endTime: '10:30',
    color: '#3B82F6'
  },
  {
    id: '2',
    title: 'Client Meeting',
    date: new Date().toISOString(),
    startTime: '14:00',
    endTime: '15:30',
    color: '#10B981'
  },
  {
    id: '3',
    title: 'Code Review',
    date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    startTime: '11:00',
    endTime: '12:00',
    color: '#F59E0B'
  }
];