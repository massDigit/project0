
/**
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.value - La valeur actuelle du champ de texte.
 * @param {function} props.onChange - Fonction de rappel appelée lorsque la valeur change.
 * @param {string} props.placeHolder - Le texte affiché lorsque le champ est vide.
 * @returns {JSX.Element} Le champ de saisie JSX. 
 */

import {useId} from 'react';

export function Input ({value, onChange,placeHolder,label,type}){

    const id = useId()

return (
<div>
    <label className="form-label" htmlFor={id}>{label}</label>
    <input
     id={id}
     value={value}
     onChange={(e)=>onChange(e.target.value)} 
     placeholder={placeHolder} 
     type={type} 
     className="form-control"/>
</div>
);
}