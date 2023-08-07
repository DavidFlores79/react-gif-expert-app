import { fireEvent, render, screen } from "@testing-library/react";
import { InputComponent } from "../../src/components/InputComponent";

describe('Pruebas en <AddCategory></AddCategory>', () => { 

    test('debe cambiar el valor de la caja de texto ', () => { 

        const inputValue = 'GOT';
        render(<InputComponent onNewCategory={ () => {}}/>);

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValue } });

        expect( input.value ).toBe(inputValue);
     })
    
    test('debe llamar onNewCategory si el input tiene valor', () => { 
        const inputValue = 'Morty';
        const onNewCategory = jest.fn();

        render(<InputComponent onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();

        /**
         * Se espera despues del submit que el valor de la caja de texto
         * este vacia
         */
        expect(input.value).toBe('');

        /**
         * Evalua que haya sido llamada la funcion
         * que solo sea una vez
         * y tambien que haya sido llamada con el valor del inputValue
         */
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);


     })

    test('No debe llamar onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();
        render(<InputComponent onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        /**
         * Evalua que NO haya sido llamada la funcion
         * porque el input esta vacio
         */
        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
     })
 })