import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import "./bitcoinPrice.css";
import {
  increaseBitcoinPrice,
  decreaseBitcoinPrice,
  addHistory,
} from "../../redux/actions/dashboardActions";

function BitcoinPrice({ bitcoinPrice, history }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const decreasePrice = () => {
    if (bitcoinPrice > 1000) {
      dispatch(decreaseBitcoinPrice());
      let historyObj = history.slice();
      const today = new Date();
      historyObj.push({
        timestamp: moment(today).format("lll").toString(),
        transaction: "Decreased Bitcoin price by 1000$",
      });
      dispatch(addHistory(historyObj));
    } else {
      setError(true);
    }
  };

  const increasePrice = () => {
    dispatch(increaseBitcoinPrice());
    let historyObj = history.slice();
    const today = new Date();
    historyObj.push({
      timestamp: moment(today).format("lll").toString(),
      transaction: "Increased Bitcoin price by 1000$",
    });
    dispatch(addHistory(historyObj));
  };

  return (
    <div className="price-parent">
      <div>Bitcoin Price is {bitcoinPrice} $</div>
      <br />
      <button className="custom-button" onClick={() => increasePrice()}>
        Increase Bitcoin Price (+1,000)
      </button>
      <button className="custom-button" onClick={() => decreasePrice()}>
        Decrease Bitcoin Price (+1,000)
      </button>

      {error && (
        <div className="error-insufficient-balance">
          Bitcoin price cannot be below 1,000$
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bitcoinPrice: state.dashboard.bitcoinPrice,
    history: state.dashboard.history,
  };
};
export default connect(mapStateToProps)(BitcoinPrice);
