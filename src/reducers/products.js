import actionTypes from '../constants/actionTypes';

const initialState = {
    list: [{
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. Una cerveza de estilo inglés con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 92
    },{
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. Una cerveza de estilo inglés con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 92
    },{
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. Una cerveza de estilo inglés con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 92
    }]
};

const productsReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.PRODUCTS_GET_LIST: {
            return state;
        }

        default:
            return state;
    }

};

export default productsReducer;