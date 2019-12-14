import React from 'react';
import './InputForm.css'


const InputForm = ({placeholder}) => {
    return (
        <div className='InputForm'>
            <input
                className='InoutForm-input'
                type='password'
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputForm;