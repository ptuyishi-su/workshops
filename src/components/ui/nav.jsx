import React from 'react'
import { Link } from 'react-router-dom'
import Demo1 from '../pages/Demo1'
import Demo3 from '../pages/Demo3'
import Demo2 from '../pages/Demo2'
const nav = () => {
  return (
    <div className="px-8 absolute w-[100%] text-white">
      <nav className="flex justify-between border-b-[.41px] border-white py-5">
        <div className="font-bold">
          <a href="/Demo1">Workshops</a>

        </div>
        <div>
          <ul className=" flex justify-between gap-20">

            <Link to="Demo1">Dem01</Link>
            <Link to="/Demo2">Demo2</Link>
            <Link to="/Demo3">Demo3</Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default nav
