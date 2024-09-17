//import styles from '../styles/Home.module.css';
//import { useState} from 'react';
import BurgerButton from './BurgerButton';
import BurgerDisplay from './display/BurgerDisplay';


function Home() {
  
  /*const [lastBurger,setLastBurger]=useState([]);


  const selectBurger = (name) =>{
    console.log('CLICK',name)
    setLastBurger([...lastBurger,name])
  };*/


  return (
    <div className='container d-flex justify-content-center align-items-center vstack gap-2 mt-5 '>
      <BurgerDisplay/>
      <BurgerButton />
    </div>
  );

}

export default Home;
