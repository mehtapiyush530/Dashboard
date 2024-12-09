import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
<div className="flex justify-center items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 h-[100vh] text-white">
      <form className="rounded-lg">
        <h2 className="text-center font-bold text-[30px] text-white">Signup Form</h2>

        <div className="">
          <label className="">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-md text-black "
          />
        </div>

        <div className="">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-md text-black"
          />
        </div>

        <div className="">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-2 border rounded-md text-black"
          />
        </div>

        <button
          type="button"
          className="w-full py-2 bg-black mt-4 text-[17px] rounded-lg hover:opacity-80"
        >
          Signup
        </button>
      </form>
    </div>    )
}

export default Signup