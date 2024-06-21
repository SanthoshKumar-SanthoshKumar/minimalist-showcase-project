
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
       <Header/>
       <div className='top-section'>
        <div className='items'>
         <h1>The choice is yours. Because they don’t have one.</h1>
         <button>QUICK VIEW</button>
         </div>
       </div>
       <About/>
       <Products/>
       <Footer/>
    </div>
  );
}

export default App;
