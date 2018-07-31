import actionTypes from '../constants/actionTypes';

const addProduct = (name, description, price) => ({
	type: actionTypes.SHOP_ADD_PRODUCT,
	payload: {
		name,
		description,
		price
	}
});

const clearShop = () => ({
	type: actionTypes.SHOP_CLEAR
});

export default { addProduct, clearShop };