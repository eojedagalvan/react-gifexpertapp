import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');



describe('Pruebas en GifGrid', () => {

    const category = 'One Punch';
    
    test('Debe de hacer match con el Snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
   
        const wrapper = shallow( <GifGrid category = { category } />);    

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id:'ABC',
            url: "https://hola.com",
            title: 'hola'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category = { category } />); 
        
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
    
    

});
