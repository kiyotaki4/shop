import React, { useContext } from 'react'
import Navbar from './Navbar';
import Admin from './Admin';
import GlobalContext from './GlobalContext' 
import Counter from './Counter';
function Cart({cart,addById,removeById,favourite}) {
  const { groupedCart } = useContext(GlobalContext);
  // console.log("suka" + groupedCart[Object.keys(groupedCart)[1]].id);
  return (
    <div>
    <Navbar favourite={favourite}/>
        <Admin/>
        <div className="cart-container">

        <h1>Корзина</h1>
        <div className='cartList'>
            {/* {cart.map((e,index)=>
            <div>
                <img src={e.img} alt="" style={{width:"120px"}}/>
                <p>{e.name}</p>
                <p>{e.price} €</p>
            </div>
            )} */}
            {Object.values(groupedCart).map((item, index) => (
  <div key={index} style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.07)',
    padding: '15px',
    borderRadius: '10px'
  }}>
    <img src={item.img} alt={item.name} style={{ width: "100px", borderRadius: "8px" }} />
    <div>
      <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
      <p style={{ margin: 0 }}>{item.price} €</p>
      <p style={{ margin: 0 }}>Количество: {item.count}</p>
      <button onClick={()=>{addById(item.id)}}>Add</button>
      <button onClick={()=>{removeById(item.id)}}>Remove</button>
      {/* <Counter name={item}/> */}
    </div>
  </div>
))}
            
        </div>
        <div style={{
  backgroundColor: '#f9f9f9',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.07)',
  marginTop: '40px',
  maxWidth: '600px',
  // marginLeft: 'auto',
  marginRight: 'auto'
}}>
  <h1 style={{ marginBottom: '20px' }}>Ваши данные</h1>

  <div style={{ marginBottom: '15px' }}>
    <h2 style={{ marginBottom: '5px' }}>Имя</h2>
    <input type="text" style={{
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '16px'
    }} />
  </div>

  <div style={{ marginBottom: '15px' }}>
    <h2 style={{ marginBottom: '5px' }}>Телефон</h2>
    <input type="text" style={{
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '16px'
    }} />
  </div>

  <div style={{ marginBottom: '25px' }}>
    <h2 style={{ marginBottom: '5px' }}>Адрес</h2>
    <input type="text" style={{
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '16px'
    }} />
  </div>

  <button style={{
    backgroundColor: '#3cb371',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    boxShadow: '0 5px 15px rgba(60, 179, 113, 0.4)'
  }}>
    Оформить заказ
  </button>
</div>
        </div>

    </div>
  )
}

export default Cart