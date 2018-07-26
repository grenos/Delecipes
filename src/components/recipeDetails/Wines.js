import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import recipeResponse from '../../../recipeResponse.json';

const Wines = props => {
  const { winePairing } = props.recipeInfo;
  const { pairingText } = winePairing;

  return (
    <div>
      <p>{pairingText}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

Wines.propTypes = {
  recipeInfo: PropTypes.shape({
    winePairing: PropTypes.object.isRequired
  }),
  winePairing: PropTypes.shape({
    pairingText: PropTypes.string.isRequired
  })
};

export default connect(mapStateToProps)(Wines);
