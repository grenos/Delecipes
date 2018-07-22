import React from 'react';
import { connect } from 'react-redux';

// import recipeResponse from '../../../recipeResponse.json';

const Wines = props => {
  const { winePairing } = props.recipeInfo;

  return (
    <div>
      <p>{winePairing.pairingText}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

export default connect(mapStateToProps)(Wines);
