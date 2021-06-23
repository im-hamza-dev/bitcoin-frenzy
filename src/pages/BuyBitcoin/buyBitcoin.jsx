import React, { useState } from "react";
import { connect } from "react-redux";
import "./buyBitcoin.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { buyBitcoin, addHistory } from "../../redux/actions/dashboardActions";

function BuyBitcoin({ bitcoinPrice, history, dollarBalance }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const buy = () => {
    if (dollarBalance >= 1000) {
      dispatch(buyBitcoin());
      let historyObj = history.slice();
      const today = new Date();
      historyObj.push({
        timestamp: moment(today).format("lll").toString(),
        transaction: "Purchased 1 Bitcoin",
      });
      dispatch(addHistory(historyObj));
    } else {
      setError(true);
    }
  };
  return (
    <div className="buy-parent">
      <div>Bitcoin Price is {bitcoinPrice} $</div>
      <br />
      {bitcoinPrice >= 10000 ? (
        <div>Prices are high, are you sure that you want to buy?</div>
      ) : (
        <div>Prices are low, buy more!</div>
      )}
      <br />
      <button className="custom-button" onClick={() => buy()}>
        Buy 1 Bitcoin
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
    dollarBalance: state.dashboard.dollarBalance,
  };
};
export default connect(mapStateToProps)(BuyBitcoin);
