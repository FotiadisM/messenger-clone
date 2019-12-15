import React from 'react';
import './InputForm.css'


const InputForm = ({mFunction, type, placeholder}) => {
    return (
        <div className='InputForm'>
            <input
                className='InoutForm-input'
                type={type}
                placeholder={placeholder}
                onChange={mFunction}
            />
        </div>
    );
}

export default InputForm;