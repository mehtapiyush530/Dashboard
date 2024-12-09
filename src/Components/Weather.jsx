import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WiHumidity, WiWindy } from 'react-icons/wi';

const Weather = () => {
  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );

  const [item, setItem] = useState([]);
  const [city, setCity] = useState('Hisar');
  const [input, setInput] = useState('');

  const recieveApi = async () => {
    try {
      let count = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=31ce8ad56db64396957114334240610&q=${city}&days=5`
      );
      console.log(count.data);
      setItem([count.data]);
    } catch (error) {
      console.log('Error=', error);
    }
  };

  useEffect(() => {
    recieveApi();
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold py-4 px-6">
          Weather
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Enter City"
                className="flex-1 border rounded-lg px-4 py-2 text-gray-700 outline-none"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() => setCity(input)}
              >
                {icon}
              </button>
            </div>
            {item?.map((item1) => (
              <div key={item1.location.name} className="flex flex-col gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-700">{item1.location.name}</p>
                  <p className="text-gray-500">{item1.location.localtime}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-bold text-blue-500">
                      {item1.current.temp_c}°C
                    </span>
                    <p className="text-gray-500">{item1.current.condition.text}</p>
                  </div>
                  <img
                    src={item1.current.condition.icon}
                    alt="Weather Icon"
                    className="w-20 h-20"
                  />
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <WiHumidity size={40} color="blue" />
                    <p className="text-gray-500">Humidity</p>
                    <p className="text-gray-700">{item1.current.humidity}%</p>
                  </div>
                  <div>
                    <WiWindy size={40} color="blue" />
                    <p className="text-gray-500">Wind</p>
                    <p className="text-gray-700">{item1.current.wind_mph} mph</p>
                  </div>
                  <div>
                    <p className="text-blue-500 text-2xl">{item1.current.cloud}%</p>
                    <p className="text-gray-500">Cloudiness</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
