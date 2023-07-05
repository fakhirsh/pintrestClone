import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import {Navbar, Feed, PinDetail, CreatePin, Search} from '../components'

const Pins = ({userObj}) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className='px-2 md:px-5'>
        <div className='bg-gray-50'>

          <Navbar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            userObj={userObj}
          />

          <div className='h-full'>
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/category/:categoryId' element={<Feed />} />
              <Route path='/pin-detail/:pinId' element={<PinDetail userObj={userObj && userObj}/>} />
              <Route path='/create-pin' element={<CreatePin userObj={userObj && userObj}/>} />
              <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pins