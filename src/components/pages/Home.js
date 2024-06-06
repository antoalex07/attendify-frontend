import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthData } from '../../auth/AuthWrapper';

const Home = () => {
  
  const navigate = useNavigate();
  const { user } = AuthData();

  const handleButtonClick = () => {
    navigate("/details");
  }

  return (
    <div className='home'>
      <div className='primary-text'>
        {user.isAuthenticated ? (
          <h1>Welcome to workforce management with attendify</h1>
        ) : (
          <h1>Streamline your workforce management with attendify</h1>
        )}
        <div className='section-divider'/>
        <p>Effortlessly manage employee tasks, attendance, and wages with our intuitive platform</p>
        {!user.isAuthenticated ? (
            <Button sx={{ fontWeight: 900, 
                          width: "500px", 
                          fontFamily: "Lato, sans seriff"}}
                    variant='contained'
                    onClick={handleButtonClick}>
          Know More</Button>    
        ):(
          <>
          </>
        )}
      </div>
      <div className='banner-image'></div>
    </div>
  )
}

export default Home