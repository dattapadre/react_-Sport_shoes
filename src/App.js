import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Product_det from './pages/Product_det';
import Create_account from './pages/Create_account';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Order_deatils from './pages/Order_deatils';
import Contact from './pages/Contact';

function App() {
  return (

    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/products' element={<Products/>}></Route>
       <Route path='/product_det/:product_id' element={<Product_det/>}></Route>
       <Route path='/create_account' element={<Create_account/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
       <Route path='/checkout' element={<Checkout/>}></Route>
       <Route path='/orders' element={<Orders/>}></Route>
       <Route path='/order_deatils/:product_order_id' element={<Order_deatils/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       

     </Routes>
    </BrowserRouter>

  );
}

export default App;
