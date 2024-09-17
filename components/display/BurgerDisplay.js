import { useSelector } from "react-redux";

function BurgerDisplay (){
    
 const burger = useSelector((state) => state.burger.value)
    return (
        <h1> Burger :{burger.join('-')} </h1>
    )
}


export default BurgerDisplay;