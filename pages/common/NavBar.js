import React from 'react'

const NavBar = () => {
  return (
    <div className="border-gray-200 border-b">
      <nav className="flex max-w-screen-xl m-auto justify-between items-center py-4">
        <h3 className="text-lg font-bold text-prim">BlueBuckDesigns</h3>
        <ul className="flex space-x-16">
          <li className="cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="/about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="/projects">Projects</a>
          </li>
        </ul>
        <button className="bg-gray-100 text-secprim px-3 py-2 rounded-full shadow">
          Contact Us
        </button>
      </nav>
    </div>
  )
}

export default NavBar
