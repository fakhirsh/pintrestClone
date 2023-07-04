import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import jwtDecode from 'jwt-decode'

const Login = () => {

  const [user, setUser] = useState({})

  function handleCallbackResponse(response){
    var userObject = jwtDecode(response.credential)
    setUser(userObject)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_API_TOKEN,
      callback: handleCallbackResponse,
      auto_select: true,
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);


  return (
    <div className="flex justify-start items-center flex-col h-screen bg-red-500">
        <div className="relative w-full h-full">
            <video
                src={shareVideo}
                type="video/mp4"
                loop
                controls = {false}
                muted
                autoPlay
                className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
              <div className="p-5">
                <img src={logo} alt="logo" width="130px"/>
              </div>
              
              <div id="signInDiv"></div>

            </div>
        </div>
    </div>
  );
}

export default Login