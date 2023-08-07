import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([])

    return (
        <>

            {/* titulo  */}
            <div className="main-title">
                <img src="../public/gif-file.png" alt="GifExpertAllLogo"/>
                <h1>GifExpertApp</h1>

            </div>

            {/* Input Text  */}
            <AddCategory setCategories={setCategories} />

            {/* Listado de Gifs */}
            {categories.map(
                (category) => (
                    <GifGrid key={category} category={category} />
                )
            )}
            {/* gif item  */}
        </>
    )
}
