import React, { useState } from 'react'
import { InputComponent } from './InputComponent'

export const AddCategory = ({ setCategories }) => {

    const addCategory = ( newCategory ) => {
        // console.log('add category', newCategory);
        // const newCategory = 'Nueva Categoria';
        setCategories(categories => [newCategory, ...categories]);
    }

      return (
        <div>
            <InputComponent 
                // setCategories={ setCategories }
                onNewCategory={ evt => addCategory(evt) }
            />
        </div>
      )
    
}
