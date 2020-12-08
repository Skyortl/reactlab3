import React, {useState} from 'react';
import CounterButton from '../CounterButton/CounterButton';

const Counter = () => {
    const [counterValue, setCounter] = useState(0);
    const [buttonValue, setButton] = useState(1);
    const changeCounterValue = value => {
        setCounter(counterValue + value);
    };
    const changeButtonValue = value => {
        setButton(buttonValue + value);
    };
    const changeButtonSign = () => {
        setButton(-buttonValue);
    };
    return (
        <div>
            <h1>Change value buttons</h1>
            <div className="card">
                <h2>{counterValue}</h2>
            </div>
            <div>
                <div className="d-flex justify-content-center p-1">
                    <CounterButton text = "++" value = {1} changeValueFunction = {changeButtonValue}></CounterButton>
                    <CounterButton className = "btn btn-danger mr-1 btn-lg" text = {buttonValue > 0 ? '+' + buttonValue : buttonValue} value = {buttonValue} changeValueFunction = {changeCounterValue}></CounterButton>
                    <CounterButton text = "--" value = {-1} changeValueFunction = {changeButtonValue}></CounterButton>
                </div> 
                    <CounterButton text = "Change sign" changeValueFunction = {changeButtonSign}></CounterButton>   
            </div>
        </div>
    );
}

export default Counter;
