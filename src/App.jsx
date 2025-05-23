// import Calendar from "./components/Calendar/Calandar";

import Calendar from "./components/Calendar/Calandar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Calendar</h1>
        {/* <Calendar /> */}
        <Calendar />
      </div>
    </div>
  );
}

export default App;