import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid.jsx', () => { 

    const category = 'Game of Thrones';

    test('Debe mostrar Loading inicial', async () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={category} /> );
        // screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
     })

    test('Debe mostrar items cuando se cargan las imagenes ', () => { 

        const gifs = [
            {
                id: 'asdasd',
                title: 'Game of Thrones',
                url: 'http://pagina.com/imagen.png'
            },
            {
                id: 'asdasd1212',
                title: 'Game of Thrones',
                url: 'http://pagina.com/imagen.png'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={category} /> );
        // screen.debug();
        expect( screen.getAllByRole('img').length).toBe(2);
     })
 })