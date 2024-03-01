import React from 'react'
import Demo1 from '../pages/Demo1'
import Demo3 from '../pages/Demo3'
import Demo2 from '../pages/Demo2'
const nav = () => {
  return (
    <div className="px-8 absolute w-[100%] text-white">
      <nav className="flex justify-between border-b-[.41px] border-white py-5">
        <div className="font-bold">
          <a href={<Demo1/>}>Workshops</a>

        </div>
        <div>
          <ul className=" flex justify-between gap-20">

            <li> <a href={<Demo1/>}>Demo 1</a></li>
            <li> <a href={<Demo2/>}>Demo 2</a></li>
            <li> <a href={<Demo3/>}>Demo 3</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default nav
