import React from 'react';

const CounterButton = (props) => {
    const{text, value, changeValueFunction, className} = props;
    const onClickFunction = () => {
        changeValueFunction(value);
    }
    return (
        <div>
            <button type="button" className={className} onClick={onClickFunction}>{text}</button>
        </div>
    );
}

export default CounterButton;

CounterButton.defaultProps = {};
CounterButton.defaultProps.className = "btn btn-primary mr-1 btn-lg";   