import * as types from "../types/dashboardTypes";

export const withdraw = () => ({
  type: types.WITHDRAW,
});

export const deposit = () => ({
  type: types.DEPOSIT,
});

export const buyBitcoin = () => ({
  type: types.BUYBITCOIN,
});

export const sellBitcoin = (payload) => ({
  type: types.SELLBITCOIN,
  payload,
});

export const increaseBitcoinPrice = () => ({
  type: types.INCREASEBITCOINPRICE,
});

export const decreaseBitcoinPrice = () => ({
  type: types.DECREASEBITCOINPRICE,
});

export const addHistory = (payload) => ({
  type: types.ADDHISTORY,
  payload,
});
