import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
// import '@testing-library/jest-dom/extend-expect';

Enzyme.configure( {adapter: new Adapter()} );
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));



/* Comando para instalar Enzyme: npm i --save-dev enzyme */

/* En caso de que estemos usando la versión 17 de react y aún no esté la versión oficial de Enzyme 2017
aplicamos también este comando: npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 */

/* Despues aplicamos el siguiente comando: npm install --save-dev enzyme-to-json */