import React from 'react'

const nav = () => {
  return (
    <div>
      <nav className="flex justify-between  px-10 py-5 border-b-2 border-black">
        <div className="font-bold">
          <p>Workshops</p>
        </div>
        <div>
          <ul className=" flex justify-between w-[400px]">
            <li> <p>Demo 1</p></li>
            <li> <p>Demo 2</p></li>
            <li> <p>Demo 2</p></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default nav
