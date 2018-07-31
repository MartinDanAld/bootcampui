import actionTypes from '../constants/actionTypes';

const initialState = {
    orders: [],
    total: 0
};

const shopReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SHOP_ADD_PRODUCT: {
            return Object.assign({}, state, {
                orders: [...state.orders, action.payload],
                total: state.total + action.payload.price
            });
        }

        case actionTypes.SHOP_CLEAR: {
            return {orders:[], total: 0}
        }

        default:
            return state;
    }

};

export default shopReducer;