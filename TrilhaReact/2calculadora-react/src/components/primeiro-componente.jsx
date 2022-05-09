import React from "react";
import {chooseOperator,chooseNumber,clearCalc,letsDoIt} from '../scripts/calculatorjs.js';

export default props =>{
    return (
    <div className="the-calculator">
    <div id="result-box"></div>
    <form>
    <div id="first-row">
        <button className="btn" id="btn-dividir" type="button" onClick={()=>{chooseOperator(0)}} >/</button>
        <button className="btn" id="btn-multiplicar" type="button" onClick={()=>{chooseOperator(1)}}>*</button>
        <button className="btn" id="btn-menos" type="button" onClick={()=>{chooseOperator(2)}}>-</button>
        <button className="btn" id="btn-mais" type="button" onClick={()=>{chooseOperator(3)}}>+</button>
    </div>
    <div id="second-row">
        <button className="btn" id="btn-7" type="button" onClick={()=>{chooseNumber(7)}}>7</button>
        <button className="btn" id="btn-8" type="button" onClick={()=>{chooseNumber(8)}}>8</button>
        <button className="btn" id="btn-9" type="button" onClick={()=>{chooseNumber(9)}}>9</button>
    </div>
    <div id="third-row">
        <button className="btn" id="btn-4" type="button" onClick={()=>{chooseNumber(4)}}>4</button>
        <button className="btn" id="btn-5" type="button" onClick={()=>{chooseNumber(5)}}>5</button>
        <button className="btn" id="btn-6" type="button" onClick={()=>{chooseNumber(6)}}>6</button>
    </div>
    <div id="forth-row">
        <button className="btn" id="btn-1" type="button" onClick={()=>{chooseNumber(1)}}>1</button>
        <button className="btn" id="btn-2" type="button" onClick={()=>{chooseNumber(2)}}>2</button>
        <button className="btn" id="btn-3" type="button" onClick={()=>{chooseNumber(3)}}>3</button>
    </div>
    <div id="forth-row">
        <button className="btn" id="btn-0" type="button" onClick={()=>{chooseNumber(0)}}>0</button>
        <button className="btn" id="btn-ponto" type="button" onClick={()=>{clearCalc()}}>C</button>
        <button className="btn" id="btn-igual" type="button" onClick={()=>{letsDoIt()}} >=</button>
    </div>
    </form>
</div>
    )
}