import './Calculator.css'
import { useState } from 'react'

export default function Screen({value}){



    return(
        <div className="screen" style = {{color: 'black'}}>
           
                <h2>{value}</h2>
        
        </div>
    )
}