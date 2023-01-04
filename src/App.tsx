import './App.css';
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import ViewCart from './pages/ViewCart';
import { Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
