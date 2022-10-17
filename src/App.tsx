import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="bg-stone-50 dark:bg-stone-700 transition duration-250">
      <Navbar />
      <h1 className='text-red-500 dark:text-blue-500'>Hello from Tailwind.</h1>
    </div>
  );
}

export default App;
