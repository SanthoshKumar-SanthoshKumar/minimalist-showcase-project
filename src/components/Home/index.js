import About from '../About'
import Products from '../Products'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className='top-section'>
        <div className='items'>
         <h1>The choice is yours. Because they don’t have one.</h1>
         <button>QUICK VIEW</button>
         </div>
       </div>
       <About/>
       <Products/>
    </div>
  )
}

export default Home