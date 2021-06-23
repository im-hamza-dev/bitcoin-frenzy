// import { Action } from 'redux';

import * as types from "../types/dashboardTypes";

const initialState = {
  bitcoinPrice: 1000,
  dollarBalance: 200,
  bitcoinBalance: 0,
  history: [],
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WITHDRAW:
      return { ...state, dollarBalance: state.dollarBalance - 100 };
    case types.DEPOSIT:
      return { ...state, dollarBalance: state.dollarBalance + 100 };
    case types.BUYBITCOIN:
      return {
        ...state,
        bitcoinBalance: state.bitcoinBalance + 1,
        dollarBalance: state.dollarBalance - state.bitcoinPrice,
      };
    case types.SELLBITCOIN:
      return {
        ...state,
        bitcoinBalance: action.payload.bitBalance,
        dollarBalance: action.payload.dollBalance,
      };
    case types.INCREASEBITCOINPRICE:
      return { ...state, bitcoinPrice: state.bitcoinPrice + 1000 };
    case types.DECREASEBITCOINPRICE:
      return { ...state, bitcoinPrice: state.bitcoinPrice - 1000 };
    case types.ADDHISTORY:
      return { ...state, history: action.payload };

    default:
      return state;
  }
};

export default DashboardReducer;
