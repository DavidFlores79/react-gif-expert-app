import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en useFetchGifs.js', () => { 
    test('Debe regresar el estado inicial del hook', () => { 
        
        const { result } = renderHook( () => useFetchGifs( 'GOT' ));
        console.log(result);
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

     })

    test('Debe retornar un arreglo de imagenes y el isLoading en false', async () => { 
        
        const { result } = renderHook( () => useFetchGifs( 'GOT' ));

        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

     })
 })