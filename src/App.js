import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/Dishees/Dishes';
import AllCategories from './Components/Filter/AllCategories';



function App() {
  return (
    <div className="App"> 
    <div className='block'>          
      <AllCategories/>
      <Cart/>
    </div> 
    <div className='block'>
      <Dishes/> 
      </div>     
    </div>
  );
}

export default App;
