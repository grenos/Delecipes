import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Badge } from 'reactstrap';

const Badges = props => {
  const {
    preparationMinutes,
    readyInMinutes,
    servings,
    cuisines,
    dishTypes
  } = props.recipeInfo;

  return (
    <div className="recipe-main__badges">
      <Badge color="info" pill>
        Preparation: {preparationMinutes ? preparationMinutes + ' min' : 'n/a'}
      </Badge>
      <Badge color="info" pill>
        Ready in: {readyInMinutes} min
      </Badge>
      <Badge color="info" pill>
        Servings: {servings}
      </Badge>
      {cuisines.map((cousine, index) => {
        return (
          <Badge key={index} color="warning" pill>
            {cousine}
          </Badge>
        );
      })}
      {dishTypes.map((dish, index) => {
        return (
          <Badge key={index} color="success" pill>
            {dish}
          </Badge>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

Badges.propTypes = {
  recipeInfo: PropTypes.shape({
    preparationMinutes: PropTypes.number.isRequired,
    readyInMinutes: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    cuisines: PropTypes.array.isRequired,
    dishTypes: PropTypes.array.isRequired
  })
};

export default connect(mapStateToProps)(Badges);
