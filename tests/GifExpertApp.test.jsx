import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp.jsx', () => { 
    
    test('Debe ...', () => { 
        render(<GifExpertApp/>);
        const inputValue = 'GOT';
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValue } });
        screen.debug();
        expect( input.value ).toBe(inputValue);
     })

    test('Debe ser igual al snapshot', () => { 
        const { container } = render(<GifExpertApp/>);
        expect( container ).toMatchSnapshot();
     })
 })