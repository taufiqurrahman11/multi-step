import { SET_ADDONS, SET_INFO, SET_PRICE, SET_STEP } from "./constants";

export const setStep = (step) => ({
    type: SET_STEP,
    step
})

export const setInfo = (info) => ({
    type: SET_INFO,
    info
})

export const setPrice = (price) => ({
    type: SET_PRICE,
    price
})

export const setAddons = (productAdd, priceAdd) => ({
    type: SET_ADDONS,
    productAdd,
    priceAdd
})