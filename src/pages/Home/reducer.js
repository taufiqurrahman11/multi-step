import { produce } from 'immer';
import { SET_ADDONS, SET_INFO, SET_PRICE, SET_STEP } from './constants';

export const initialState = {
    step: 1,
    info: {
        name: '',
        email: '',
        phoneNumber: '',
    },
    price: 0,
    addons: {
        productAdd: '',
        priceAdd: 0,
    }
}

export const storedKey = ['step', 'info', 'price', 'addons']

const homeReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SET_STEP:
                draft.step = action.step
                break;
            case SET_INFO:
                draft.info = action.info
                break;
            case SET_PRICE:
                draft.price = action.price
                break;
            case SET_ADDONS:
                draft.addons.productAdd = action.productAdd;
                draft.addons.priceAdd = action.priceAdd;
                break;
        }
    });

export default homeReducer;