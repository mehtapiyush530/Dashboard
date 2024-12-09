import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const weather = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>
  );
  const calender = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
  const notes = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  );
  const todo = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
    </svg>
  );

  const imageArr = [
    { icon: weather, text: 'Weather', path: '/Weather' },
    { icon: calender, text: 'Calendar', path: '/Calender' },
    { icon: notes, text: 'Notes', path: '/Notes' },
    { icon: todo, text: 'To-Do List', path: '/Todolist' },
  ];

  const imageArr2 = [
    { image: '/photos/weather.png', path: '/Weather' },
    { image: '/photos/calender.png', path: '/Calender' },
    { image: '/photos/todo.png', path: '/Todolist' },
    { image: '/photos/notes.png', path: '/Notes' },
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 shadow-lg text-white font-bold text-[1.5rem] md:text-[2rem] flex flex-row justify-between items-center">
        <p>DashBuilder</p>
        <Link to="/Signup">
        <button className="bg-white text-purple-700 rounded-2xl px-4 md:px-8 text-sm md:text-base py-1">Sign Up</button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[20%]">
          <div className="flex flex-col gap-4 bg-gradient-to-r from-pink-400 via-purple-600 to-pink-600 h-full py-4 px-2">
            <p className="text-center text-xl md:text-2xl font-semibold text-white">Widgets</p>
            {imageArr.map((item, index) => {
              const color = () => {
                if (index === 0) return 'bg-gradient-to-r from-blue-400 to-blue-600';
                if (index === 1) return 'bg-gradient-to-r from-green-400 to-green-600';
                if (index === 2) return 'bg-gradient-to-r from-purple-500 to-purple-700';
                return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
              };
              return (
                <Link key={index} to={item.path}>
                  <div className={`flex gap-4 py-2 px-2 md:py-4 md:px-4 mx-1 md:mx-4 rounded-xl ${color()}`}>
                    {item.icon}
                    <p className="text-sm md:text-base">{item.text}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-[80%] bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-6 py-4 md:py-6">
            {imageArr2.map((item, index) => (
              <Link key={index} to={item.path}>
                <img src={item.image} alt={`Go to ${item.path}`} className="rounded-lg w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
