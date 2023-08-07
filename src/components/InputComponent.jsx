import React, { useState } from 'react'

// export const InputComponent = ({ setCategories }) => {
export const InputComponent = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        setinputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /**Solo pasa si es mas de 1 caracter */
        if(inputValue.trim().length < 1) return;
        // setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar Gifs' value={inputValue} onChange={ handleInputChange } />
        </form>
    )
}
