import React, { useState } from "react";
import "./sellBitcoin.css";
import { connect } from "react-redux";
import moment from "moment";
import { useDispatch } from "react-redux";
import { sellBitcoin, addHistory } from "../../redux/actions/dashboardActions";

function SellBitcoin({ bitcoinPrice, history, bitcoinBalance }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const sell = () => {
    if (bitcoinBalance >= 1) {
      dispatch(sellBitcoin());
      let historyObj = history.slice();
      const today = new Date();
      historyObj.push({
        timestamp: moment(today).format("lll").toString(),
        transaction: "Sold 1 Bitcoin",
      });
      dispatch(addHistory(historyObj));
    } else {
      setError(true);
    }
  };
  return (
    <div className="sell-parent">
      <div>Bitcoin Price is {bitcoinPrice}</div>
      <br />

      {bitcoinPrice >= 10000 ? (
        <div>Prices are high, sell now!</div>
      ) : (
        <div>Prices are low, are you sure you want to sell?</div>
      )}
      <br />

      <button className="custom-button" onClick={() => sell()}>
        Sell 1 Bitcoin
      </button>
      {error && (
        <div className="error-insufficient-balance">Insufficient Balance</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bitcoinPrice: state.dashboard.bitcoinPrice,
    history: state.dashboard.history,
    bitcoinBalance: state.dashboard.bitcoinBalance,
  };
};
export default connect(mapStateToProps)(SellBitcoin);
