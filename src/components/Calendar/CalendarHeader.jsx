export default function CalendarHeader({ monthTitle, onPrev, onNext, onToday }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-200">
      <button
        onClick={onPrev}
        className="p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Previous month"
      >
        ◀
      </button>

      <h2 className="text-xl font-semibold text-gray-700 select-none">
        {monthTitle}
      </h2>

      <div className="flex items-center gap-2">
        <button
          onClick={onToday}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Today
        </button>
        <button
          onClick={onNext}
          className="p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Next month"
        >
          ▶
        </button>
      </div>
    </div>
  );
}