import './App.css';
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import ViewCart from './pages/ViewCart';
import { Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <div className="h-screen bg-stone-50 dark:bg-stone-700 transition duration-250">
      <Navbar />
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
          element={<ViewCart />}
        />  
      </Routes>
      <h1 className='text-red-500 dark:text-blue-500'>Hello from Tailwind.</h1>
    </div>
  );
}

export default App;
