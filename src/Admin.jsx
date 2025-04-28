import React from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
  const navigate = useNavigate()
  return (
    <div className="admin-menu">
          <button
          onClick={() => navigate('/admin')

            
          } 
          style={{
            backgroundColor: '#2196f3', // синий
            color: 'white',
          }}
          >Перейти в админку</button>
          <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#9c27b0', // синий
            color: 'white',
          }} 
          >Перейти на витрину</button>
        </div>
  )
}

export default Admin