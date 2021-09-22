import { shallow } from 'enzyme'
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

    const title = "Hola Mundo";
    const url = 'https://localhost/algo.jpg';

    let wrapper = shallow( <GifGridItem title = { title } url = { url }/> );

    beforeEach( () => {

        wrapper = shallow( <GifGridItem title = { title } url = { url }/> );

    });

    
    test('Debe de mostrar el componente correctamente', () => {
    

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {
       
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );    

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );
        
    });

    test('Debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.props().className;
        console.log( className );
        expect( className.includes('animate__fadeIn') ).toBe( true );

    });
    
    
    
    

});
