import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

/** Este es un Custom Hook */
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    console.log('is loading', isLoading);

    const getImages = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading,
    }

}
