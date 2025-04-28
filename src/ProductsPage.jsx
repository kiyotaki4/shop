import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';
import Admin from './Admin';
import GlobalContext from './GlobalContext' 

function ProductsPage({products,addToCart,addById,removeById,favourite,notification,setProducts,addFav}) {
  const { groupedCart } = useContext(GlobalContext);
    const {id} = useParams();
    const product = products[id];
    if(!product) return <p>Товар не найден</p>
    console.log("suka"+JSON.stringify(groupedCart[product.name]?.id))
    console.log(groupedCart[product.name]?.id)
    console.log(product.id)
  return (
    <div>
        <Navbar favourite={favourite}/>
        <Admin/>
        {notification && (
      <div className="notification" 
      
      >
        {notification}
      </div>
    )}
        <div className="product-card">
            <img src={`${product.img}`} alt="" className='jpg-product'/>
            <div className="left-info">
      <h2>{product.name}</h2>
      <p>Цена: {product.price} RUB</p>
      <p>Бренд: {product.brand}</p>
      <button
       style={{
        backgroundColor: '#4CAF50',  // Зеленый цвет
        color: 'white',              // Белый текст
        padding: '10px 20px',        // Отступы
        fontSize: '16px',            // Размер шрифта
        border: 'none',              // Убираем рамку
        borderRadius: '5px',         // Скругленные углы
        cursor: 'pointer',           // Курсор при наведении
        transition: 'background-color 0.3s ease', // Плавное изменение фона
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} // Цвет при наведении
      onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}  // Возврат к изначальному цвету
      onMouseDown={(e) => e.target.style.backgroundColor = '#397d3b'}  // Цвет при нажатии
      onMouseUp={(e) => e.target.style.backgroundColor = '#45a049'} 
      onClick={()=>addToCart(product)}
      >Добавить в корзину</button>
      <button onClick={()=>addFav(product.id)}>Избранное</button>
      <h1 style={{textAlign:"center"}}>

      {groupedCart[product.name]?.count || 0}
      </h1>
      <button onClick={()=>addToCart(product)}>Add</button>
      <button onClick={()=>removeById(groupedCart[product.name].id)}
        disabled={groupedCart[product.name]?.count <= 1}
        >Remove</button>
      </div>
      </div>
    </div>
  )
}

export default ProductsPage