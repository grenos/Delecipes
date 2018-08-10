import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//import RecipeRes_1 from '../../mock_json_data/RecipeRes_1.json';

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

Wines.propTypes = {
  recipeInfo: PropTypes.shape({
    winePairing: PropTypes.object.isRequired
  }),
  winePairing: PropTypes.shape({
    pairingText: PropTypes.string.isRequired
  })
};

export default connect(mapStateToProps)(Wines);
