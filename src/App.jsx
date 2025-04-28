  import { useEffect, useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import Admin from './Admin'
  import Navbar from './Navbar'
  import { Routes, Route, useNavigate } from 'react-router-dom'
  import ProductsPage from './ProductsPage'
  import GlobalContext from './GlobalContext.jsx'
  import Cart from './cart'
  import Fav from './Fav.jsx'
import AdminPage from './AdminPage.jsx'
  
  function App() {
    const [products, setProducts] = useState([
      { id: 1, name: "iPhone 14", price: 322, brand: "Apple", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCWaXOrJJBsvQZOSGo7e0Ld1CUSj2rxWbAQ&s", isFav: false },
      { id: 2, name: "Galaxy S21", price: 799, brand: "Samsung", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhrwT46KvWllUBqShDiYroi39GyEz8gVSLw&s", isFav: false },
      { id: 3, name: "Xperia 1 II", price: 1199, brand: "Sony", img: "https://avatars.mds.yandex.net/get-mpic/5366523/2a00000195fd40a41e41d9914e6219fe0296/orig", isFav: false },
      { id: 4, name: "MacBook Air M1", price: 999, brand: "Apple", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUA1J86q3K3DOoyJ8ql-EaHV49MTYdipht9Q&s", isFav: false },
      { id: 5, name: "Surface Laptop 4", price: 1499, brand: "Microsoft", img: "https://vsevdom.net/image/cache/catalog/products_images/nsd/09112023/DNS-5053095-800x800.jpg", isFav: false },
      { id: 6, name: "ThinkPad X1 Carbon", price: 1799, brand: "Lenovo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60b2_p6CLApyglA2LY8H_CbYYI18RQbEEk_bHnQ2lQ6O5QbskG7_p4VUqyh1wOZulyds&usqp=CAU", isFav: false },
      { id: 7, name: "iPad Pro", price: 799, brand: "Apple", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrDxTpPMEh_uO8G5a6J0ducszbXb1xjVgNEFlWVrY41GyN7hWASjI97PvrWUrHX_4D5I&usqp=CAU", isFav: false },
      { id: 8, name: "Pixel 6", price: 699, brand: "Google", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIdBtFdRAd0INQBmYJ7PKRGGAZQpO53LWqWXOpWrbwbQjUt6iDgOYthOuWd6_cTNH9Wg&usqp=CAU", isFav: false },
      { id: 9, name: "OnePlus 9 Pro", price: 1069, brand: "OnePlus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrDxTpPMEh_uO8G5a6J0ducszbXb1xjVgNEFlWVrY41GyN7hWASjI97PvrWUrHX_4D5I&usqp=CAU", isFav: false },
      { id: 10, name: "Huawei P40", price: 799, brand: "Huawei", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIdBtFdRAd0INQBmYJ7PKRGGAZQpO53LWqWXOpWrbwbQjUt6iDgOYthOuWd6_cTNH9Wg&usqp=CAU", isFav: false },
      { id: 11, name: "iPhone 14", price: 799, brand: "Apple", img: "https://aressystem.ir/wp-content/uploads/2025/01/pro-x-superlight-2-dex-pink-gallery-1.webp", isFav: false },
      { id: 12, name: "Galaxy S21", price: 799, brand: "Samsung", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60b2_p6CLApyglA2LY8H_CbYYI18RQbEEk_bHnQ2lQ6O5QbskG7_p4VUqyh1wOZulyds&usqp=CAU", isFav: false },
      { id: 13, name: "Xperia 1 II", price: 1199, brand: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYTLlwrJbwGm7Yq7SfxhTT7sUI756DIvOIb0MWsOpc75BaApimK0k0GksxgtCzD0ZjFU&usqp=CAU", isFav: false },
      { id: 14, name: "MacBook Air M1", price: 999, brand: "Apple", img: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-magenta.png", isFav: false },
      { id: 15, name: "Surface Laptop 4", price: 1499, brand: "Microsoft", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhrwT46KvWllUBqShDiYroi39GyEz8gVSLw&s", isFav: false },
    ]);
    
    const [favourite,setFavourite] = useState([])
   
    const remove = () =>{
      let tempArray = products.filter((e,i)=>i!==1)
      setProducts(tempArray)
    }
    const navigate = useNavigate();
    const [cart,setCart]=useState([
     
    ])
    const addToCart = (product) =>{
      setCart([...cart,product])
      setNotification("Товар добавлен в корзину")
      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
    const addById = (elementId) =>{
      const i=cart.find(s=>s.id===elementId);
      if(i){
        setCart([...cart,i])
      }
      setNotification("Товар добавлен в корзину")
      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
    const removeById = (elementId) =>{
    const i = cart.findIndex(s=>s.id===elementId);
    if (i !== -1) {
      const updatedCart = [
        ...cart.slice(0, i), // Все элементы до найденного
        ...cart.slice(i + 1), // Все элементы после найденного
      ];
      setCart(updatedCart);
    }
    }
    console.log(cart)
      const groupedCart = cart.reduce((acc,item,index)=>{
       
        if(!acc[item.name]){
          acc[item.name]={...item,count:1};
        
        }
        else{
          acc[item.name].count +=1;
          
        }
       
        return acc;
      },{});
      
      console.log("Все товары после группировки:");
console.log(Object.keys(groupedCart));
  
const addFav = (index) => {
  setProducts(prevProducts => 
    prevProducts.map((item) => 
      item.id === index ? { ...item, isFav: !item.isFav } : item
    )
  );
  setNotification("Товар добавлен в избранное")
  setTimeout(() => {
    setNotification("");
  }, 2000);
};
        useEffect(() => {
          const tempArray = products.filter((e) => e.isFav === true);
          setFavourite(tempArray);
          console.log("Избранные изменились:", favourite);
        }, [products]);


        const uniqueBrands = [...new Set(products.map(product => product.brand))];
        const [selectedBrands,setSelectedBrands]= useState([])
        const handleCheckboxChange = (brand) => {
          setSelectedBrands(prevState=>prevState.includes(brand)?prevState.filter(item=>item!==brand):[...prevState,brand])
          console.log("yagodka"+selectedBrands)
        }
        const [sortedArray,setSortedArray]=useState([])
        useEffect(()=>{
          if(selectedBrands.length>0){
            const filtered = products.filter(product=>
              selectedBrands.includes(product.brand)
            )
            setSortedArray(filtered);
          }else {
            setSortedArray(products);
          }

        },[selectedBrands,products])

         const [notification,setNotification]=useState("")
    return (
      <GlobalContext.Provider value={{ cart, setCart,groupedCart }}>
      <Routes>
        <Route path="/" element={
      <div className='main-page'>
          <Navbar favourite={favourite}/>
          <Admin/>
          {notification && (
      <div className="notification" 
      
      >
        {notification}
      </div>
    )}
          <div className="Products">
            <h1>Главная страница</h1>
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
                {sortedArray.map((e,index)=>
                <div className="card"
                key={index}
              onClick={() => navigate(`/product/${index}`)}
                >
                  {/* <span className="jpg"></span> */}
                  <img src={e.img} alt="" className='jpg'/>
                <p>{e.price} €</p>
                <p>{e.name}</p>
                <p>{e.brand}</p>
                <button 
                style={{ backgroundColor: e.isFav ? "#ff4d4d":"rgb(240, 157, 33)"   }}
                onClick={(event) => {
                  event.stopPropagation();
                  addFav(e.id) }}>Избранное</button>
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
        }/>
        <Route path="/product/:id" element={<ProductsPage products={products} addToCart={addToCart} cart={cart} addById={addById} removeById={removeById} favourite={favourite} notification={notification} setProducts={setProducts} addFav={addFav} />}/>
        <Route path="/cart" element={<Cart cart={cart} addById={addById} removeById={removeById} favourite={favourite}/>}/>
        <Route path="/fav" element={<Fav 
            products={products} 
            favourite={favourite} 
            addFav={addFav} 
            setProducts={setProducts} 
            setFavourite={setFavourite}
            selectedBrands={selectedBrands}   // +++
    handleCheckboxChange={handleCheckboxChange}   // +++
    uniqueBrands={uniqueBrands}   // +++
        />}/>
        <Route path="/admin" element={<AdminPage products={products}  setProducts={setProducts}/>}/>
      </Routes>
      </GlobalContext.Provider>
    )
  }

  export default App
