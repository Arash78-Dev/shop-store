import './App.css';
import { useState , useEffect } from 'react';
import Navbar from './component/navbar/Navbar';
import Products from './component/product/Products';
import Modal from './component/Modal'
import { commerce } from './lib/commerce';
import Cart from './component/Cart/Cart';
import {Routes,Route} from 'react-router-dom'
import Checkout from './component/Checkout/Checkout';

function App() {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState([]);

  const [modal, setmodal] = useState(false);
  const fetchdata = async ()=>{
    setmodal(true)
    const {data}=await commerce.products.list();
    setmodal(false)
    setproducts(data);
  }

  const setcarted = async ()=>{
    const cartse = await commerce.cart.retrieve();
    setcart(cartse);
  }

  const handleaddcart = async (id,qntity)=>{  
    const response = await commerce.cart.add(id,qntity)
    setcart(response.cart)
  }
  const handleupdatecart = async (id,quantity)=>{  
    
    const response = await commerce.cart.update(id,{quantity})
    console.log(response.cart);
    setcart(response.cart)
  }
  const handleremovecart = async (id,)=>{  
    const response = await commerce.cart.remove(id)
    setcart(response.cart)
  }
  const handleemptycart = async ()=>{  
    const response = await commerce.cart.empty()
    setcart(response.cart)
  }
  const handlerefresh = async ()=>{  
    const {cart} = await commerce.cart.refresh()
    setcart(cart)
  }


  useEffect(() => {
    fetchdata();
    setcarted();
  }, []);
  let cartTotalItem

if(cart){
   cartTotalItem=cart.total_items;
}
  return (
    <div>
      {modal?<Modal/>:null}
      <Navbar totalitem={cartTotalItem}/>
      <Routes>
         <Route exact path="/" element={<Products products={products} add={handleaddcart}/>}/> 
         <Route  path="/cart" 
          element={
          <Cart cart={cart} handleupdatecart={handleupdatecart}
          handleremovecart={handleremovecart} handleemptycart={handleemptycart} />
          }/> 

         <Route  path="/checkout" element={<Checkout  cart={cart} handlerefresh={handlerefresh}/> }/> 

     </Routes>
    </div>
  );
}

export default App;
