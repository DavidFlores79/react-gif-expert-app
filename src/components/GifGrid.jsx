import { GIfItem } from './GIfItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // console.log(isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading ? (<h2 >Cargando...</h2>) : null
                isLoading && <h2 >Cargando...</h2>
            }
            
            <div className="card-grid">
            {
                /**
                 * Cuando se tienen muchas propiedades se puede usar 
                 * el operador spread... y se esparcen como props
                 */
                images.map( gif => (
                    <GIfItem key={gif.id} {...gif}/>
                ))
            }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
