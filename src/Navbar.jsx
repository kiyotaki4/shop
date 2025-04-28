import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from './GlobalContext' 
function Navbar({favourite}) {
  const navigate = useNavigate(); 
  const { cart, setCart } = useContext(GlobalContext);
  return (
    <div className="navbar">
        <div className="left">
        <span
          className="logo"
          onClick={() => navigate('/')} 
          style={{ cursor: 'pointer', fontWeight: 'bold',color:"#7dc089" }}
        >
          Logo
        </span>
        <button  onClick={() => navigate('/')} style={{backgroundColor:"#7dc0c2",padding:"10px"}}>Главная страница</button>
        </div>
       
        <div className="right">
        <div className="cartBtn" style={{marginRight:"10px"}}>
        <button  onClick={() => navigate(`/fav`)}>Избранное</button>
       
          <div className="count">{favourite?.length || 0}</div>
          
        </div>
        
        <div className="cartBtn">
        <button onClick={()=>navigate('/cart')}>Корзина
        </button>
          <div className="count">{cart?.length || 0}</div>
          
        </div>
        </div>
        
      </div>
  )
}

export default Navbar