import Calendar from "./components/Calendar/Calandar";
import { events } from "./data/events";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 h-full">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Event Calendar
        </h1>
        <Calendar events={events} />
      </div>
    </div>
  );
}

export default App;
