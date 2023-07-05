import React from 'react'
import { NavLink, Link } from 'react-router-dom' 
import {RiHomeFill} from 'react-icons/ri'
import {IoIosArrowForward} from 'react-icons/io'

import logo from '../assets/logo.png'

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:bg-gray-100 hover:text-black transition-all durtation-200 ease-in-out capitalize';
const isActiveStyle    = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all durtation-200 ease-in-out capitalize';

const categories = [
  {name: 'Art'},
  {name: 'Wallpapers'},
  {name: 'Animals'},
  {name: 'Coding'},
  {name: 'Gaming'},
  {name: 'Other'},
]

const Sidebar = ({userObj, closeToggle}) => {

  const handleCloseSidebar = () => {
    if(closeToggle)
      closeToggle(false)
  }

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <Link
          to='/'
          className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full"/>
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to='/'
            className={({isActive})=> isActive ? isActiveStyle : isNotActiveStyle}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill fontSize={20}/>
            Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2x1:text-xl'>Discover Categories</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({isActive})=> isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <IoIosArrowForward fontSize={20}/>
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {userObj && (
        <Link
          to={`/user-profile/${userObj._id}`}
          className='flex y-5 mb-3 items-center gap-2 p-2 bg-white rounded-lg shadow-lg'
          onClick={handleCloseSidebar}
        >
          <img src={userObj.image} alt="user-profile" className="w-10 h-10 rounded-full"/>
          <p>{userObj.userName}</p>
        </Link>
      )}
    </div>
  )
}

export default Sidebar