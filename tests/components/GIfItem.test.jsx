const { render } = require("@testing-library/react")
const { GIfItem } = require("../../src/components/GIfItem")

describe('Pruebas en Gif item', () => { 
    
    test('debe ser igual que el snapshot', () => { 

        const title = "GOT";
        const url = 'https:got.com/imagen.png'

        const { container } = render( <GIfItem title={ title} url={url}/> )

        expect( container ).toMatchSnapshot();

     })
 })