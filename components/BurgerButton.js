

import { useDispatch } from 'react-redux';
import { addBurgerToStore } from '../reducers/burger';

function BurgerButton (){

   /*const handleClick=()=>{
     props.selectBurger(props.name)
   };*/

   const dispatch= useDispatch();
   

   const addBurger = (newBurger) =>{
     dispatch(addBurgerToStore(newBurger))
   }

 return (
    <div className='container d-flex justify-content-center align-items-center vstack gap-2 mt-5 '>
     <button onClick={() => addBurger('usa')}>usa</button>
     <button onClick={() => addBurger('cheesy')}>cheesy</button>
     <button onClick={() => addBurger('meatLover')}>meatLover</button>
    </div>
 );

}

export default BurgerButton;
