import React from "react";
import "./header.css";
import { connect } from "react-redux";
import Logo from "../../assets/bitcoin.svg";

function Header({ bitcoinPrice, bitcoinBalance, dollarBalance }) {
  return (
    <>
      <div className="header">
        <div className="flexbox">
          <img className="frenzy-logo" src={Logo} alt="bitcoin-frenzy" />
          BITCOIN FRENZY
        </div>
        <div>1 BITCOIN = {bitcoinPrice} $</div>
        <div>
          <div>{dollarBalance} $</div>
          <div>{bitcoinBalance} BITCOINS</div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    bitcoinPrice: state.dashboard.bitcoinPrice,
    bitcoinBalance: state.dashboard.bitcoinBalance,
    dollarBalance: state.dashboard.dollarBalance,
  };
};

export default connect(mapStateToProps)(Header);
