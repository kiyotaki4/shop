import React from 'react'
import Navbar from './Navbar'
import Admin from './Admin'
import { useNavigate } from 'react-router-dom';
function Fav({

  products,
  favourite,
  addFav ,
  setProducts,
  setFavourite, 
  selectedBrands,
    handleCheckboxChange,
    uniqueBrands,
}) 


{
  const navigate = useNavigate();
  const removeFav = (index) => {
    const favId = favourite[index].id; // получаешь id товара из favourite
  
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === favId
          ? { ...product, isFav: false } // для нужного id ставим isFav = false
          : product
      )
    );
  };
  const filteredFavourites = favourite.filter(product => 
    selectedBrands.length === 0 || selectedBrands.includes(product.brand)
  );
    // console.log("fav"+JSON.stringify(favourite))
    // const tempArray = products.filter((e,i)=>e.isFav===true)
    // console.log("cobe"+JSON.stringify(tempArray))
  return (
    <div>
    <Navbar favourite={favourite}/>
        <Admin/>
        <div className="Products">
            <h1>Избранные товары</h1>
            <div className="products-container">
              
            <div className="filter">
                <h2>Фильтр по брендам</h2>
                {uniqueBrands.map((e,index)=>
                 <span><input type="checkbox"
                 checked={selectedBrands.includes(e)} 
                 onChange={() => handleCheckboxChange(e)} 
                 />{e}</span>
                )}
                
                </div>
              <div className="products-list">
                {filteredFavourites.map((e,index)=>
                <div className="card"
                key={index}
              onClick={() => navigate(`/product/${e.id-1}`)}
                >
                  {/* <span className="jpg"></span> */}
                  <img src={e.img} alt="" className='jpg'/>
                <p>{e.price} €</p>
                <p>{e.name}</p>
                <p>{e.brand}</p>
                <button 
                
                onClick={(event) => {
                  event.stopPropagation();
                  removeFav(index)}}
                  style={{ backgroundColor: e.isFav ? "#ff4d4d":"rgb(240, 157, 33)"   }}
                  >Убрать из избранного</button>
                </div>  
                )}
                
                
              </div>
            </div>
                {/* <button onClick={()=>createProduct()}>create</button>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button onClick={()=>remove()}>remove</button> */}
          </div>
  </div>
        
  )
}

export default Fav