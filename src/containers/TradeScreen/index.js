import React from "react";
import { connect } from "react-redux";

const TradeScreen = () => {
  return <h1>TradeScreen</h1>;
};

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(TradeScreen);
