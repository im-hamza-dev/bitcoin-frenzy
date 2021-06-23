import React, { useState } from "react";
import "./myWallet.css";
import { connect } from "react-redux";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  addHistory,
  deposit,
  withdraw,
} from "../../redux/actions/dashboardActions";

function MyWallet({ bitcoinBalance, history, dollarBalance }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const depositDollars = () => {
    dispatch(deposit());
    let historyObj = history.slice();
    console.log(historyObj);
    const today = new Date();
    historyObj.push({
      timestamp: moment(today).format("lll").toString(),
      transaction: "100$ Deposit",
    });
    dispatch(addHistory(historyObj));
  };

  const withdrawDollars = () => {
    if (dollarBalance >= 100) {
      dispatch(withdraw());
      let historyObj = history.slice();
      const today = new Date();
      historyObj.push({
        timestamp: moment(today).format("lll").toString(),
        transaction: "100$ Withdraw",
      });
      dispatch(addHistory(historyObj));
    } else {
      setError(true);
    }
  };
  return (
    <div className="wallet-parent">
      <div>Your Bitcoin Wallet</div>
      <br />
      <div>You now owns {bitcoinBalance} Bitcoins</div>
      <br />
      <br />
      <button className="custom-button" onClick={() => depositDollars()}>
        Deposit 100$
      </button>
      <br />
      <br />
      <button className="custom-button" onClick={() => withdrawDollars()}>
        Withdraw 100$
      </button>
      {error && (
        <div className="error-insufficient-balance">Insufficient Balance</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.dashboard.history,
    bitcoinBalance: state.dashboard.bitcoinBalance,
    dollarBalance: state.dashboard.dollarBalance,
  };
};

export default connect(mapStateToProps)(MyWallet);
