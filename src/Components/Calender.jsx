import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 flex items-center justify-center p-6">
      <div className="w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] xl:w-[20%] flex flex-col bg-white rounded-lg shadow-lg border border-gray-300 p-6">
        <p className="bg-gradient-to-r from-green-500 to-green-700 text-white text-[2rem] md:text-[3rem] text-center font-bold mb-6 p-2 rounded-md shadow-md">
          Calendar
        </p>
        <Calendar
          onChange={setDate}
          value={date}
          className="react-calendar bg-gradient-to-r from-blue-100 to-blue-300 p-4 rounded-lg shadow-md"
        />
        <p className="mt-6 text-center text-gray-800 font-semibold text-lg">
          Selected Date: <span className="text-blue-600">{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
