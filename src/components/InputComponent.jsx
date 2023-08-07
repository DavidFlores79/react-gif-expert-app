import React, { useState } from 'react'
import PropTypes from "prop-types";

// export const InputComponent = ({ setCategories }) => {
export const InputComponent = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ({ target }) => {
        // console.log(target.value);
        setinputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('hola mundo desde surmit!');
        
        /**Solo pasa si es mas de 1 caracter */
        if(inputValue.trim().length < 1) return;
        // setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={handleSubmit} aria-label='form'>
            <input type="text" placeholder='Buscar Gifs' value={inputValue} onChange={ handleInputChange } />
        </form>
    )
}

InputComponent.propTypes = {
 onNewCategory: PropTypes.func.isRequired,
}
