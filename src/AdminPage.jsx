import React, { useState } from 'react'
import Admin from "./Admin.jsx"

function AdminPage({products,setProducts}) {
    const [isActive,setIsActive] = useState(false)
  const [name,setName]=useState()
  const [brand,setBrand]=useState()
  const [price,setPrice]=useState()
  const [img,setImg]=useState('iphone.webp')
  const addNewProduct = (name,brand,price,img) =>{
    setProducts(prev => [
      ...prev,
      {
        id: Date.now(), // чтобы id был уникальный
        name: name,
        brand: brand,
        price: price,
        img: img,
      }
    ])
    console.log("added")
    setNotification("Товар добавлен")
    setTimeout(() => {
      setNotification("");
    }, 2000);
    setIsActive(false)
  }
  const [notification,setNotification]=useState("")
  const removeProduct = (removeId) =>{
    const tempArray = products.filter((e,i)=>e.id!==removeId)
    setProducts(tempArray)
    setNotification("Товар удален")
    setTimeout(() => {
      setNotification("");
    }, 2000);
  }
  return (
    
    <div >
      
        <Admin/>
        {notification && (
      <div className="notification" 
      
      >
        {notification}
      </div>
    )}
        <div style={{backgroundColor:"#e7ebf0"}}>
        <div className="admin-main" >
            <div className="top-menu" style={{display:"flex",justifyContent:"space-between",marginBottom:"80px"}}>

            <h1>Товары</h1>
            <button onClick={()=>setIsActive(!isActive)}>Добавить товар</button>
            </div>
            <div>
            {isActive ? (
              <div className="add-product">
                  <p>Имя товара <span style={{color:"red"}}>*</span></p>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                  <p>Бренд товара <span style={{color:"red"}}>*</span></p>
                  <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
                  <p>Цена <span style={{color:"red"}}>*</span></p>
                  <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                  <p>Изображение <span style={{color:"red"}}>*</span></p>
                  <input type="text" value={img} onChange={(e)=>setImg(e.target.value)}/>
                  <div className="buttons-container">
                  <button onClick={()=>(name && brand && price && img)?addNewProduct(name,brand,price,img):console.log("error")}>Сохранить</button>
                  <button onClick={()=>setIsActive(!isActive)}>Отмена</button>
                  </div>
              </div>
            ) : (
              <div className="products-admin" style={{ paddingBottom: "200px", marginBottom: "200px" }}>
  {products.map(e => (
    <div key={e.id} className="product-item">
      <img src={e.img} alt={e.name} />
      <span>{e.id}</span>
      <span>{e.name}</span>
      <span>{e.brand}</span>
      <span>{e.price} ₽</span>
      <button onClick={() => removeProduct(e.id)}>Удалить товар</button>
    </div>
  ))}
</div>
            )}
          </div>
        </div>
        </div>
    </div>
  )
}

export default AdminPage