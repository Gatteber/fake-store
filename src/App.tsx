import './App.css';
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import ViewCart from './pages/ViewCart';
import { Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import ViewItem from './pages/ViewItem';
import { useState } from 'react';

interface cartDetails {
  name: string,
  price: string,
  quantity: number,
  imageID: any,
}

function App() {
  const [cartItems, setCartItems] = useState<Array<cartDetails>>([
    // {
    //   name: "hello",
    //   price: "24.99",
    //   quantity: 1,
    // },
    // {
    //   name: "goodbye",
    //   price: "24.99",
    //   quantity: 2,
    // },
  ])
  return (
    <div className="h-screen bg-stone-50 dark:bg-stone-700 transition duration-250">
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route 
          path="/" 
          element={<Home />}
        />  
        <Route 
          path="/about" 
          element={<About />}
        />  
        <Route 
          path="/store" 
          element={<Store />}
        />  
        <Route 
          path="/view-cart" 
          element={<ViewCart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/view-item/:id"
          element={<ViewItem cartItems={cartItems} setCartItems={setCartItems} />}
        />  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
