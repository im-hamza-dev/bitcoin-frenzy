import React from "react";
import { connect } from "react-redux";
import "./history.css";
function History({ history }) {
  return (
    <>
      <div className="history-parent">
        {history
          ?.slice(0)
          .reverse()
          .map((obj, index) => (
            <>
              <div key={index} className="item-parent">
                <div>{obj.timestamp}</div>
                <div className="transaction">{obj.transaction}</div>
              </div>
              <hr className="divider" />
            </>
          ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.dashboard.history,
  };
};

export default connect(mapStateToProps)(History);
