import Screen from './Screen';
import Buttons from './Buttons';
import './Calculator.css';
import { useState } from 'react';

export default function Calculator(){

    let [clickValue, setClickValue] = useState('');


function handler(val){
    if(val === "+" || val === "-" || val === "*" || val === "/" || val === "=" ){
        setClickValue('');
    } else {
        setClickValue(clickValue + val)
    }
}  
    


    return (
        <>
            <div className = "calculator">
                <Screen value = {clickValue}/>
                <Buttons onButtonClick = {handler} />
            </div>
        </>
    )
}