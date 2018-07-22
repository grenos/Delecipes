import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';

//import recipeResponse from '../../../recipeResponse.json';

const Badges = props => {
  const {
    preparationMinutes,
    readyInMinutes,
    servings,
    cuisines,
    dishTypes
  } = props.recipeInfo;

  return (
    <div className="recipe-info-badges">
      <Badge color="info" pill>
        Preparation: {preparationMinutes}'
      </Badge>
      <Badge color="info" pill>
        Ready in: {readyInMinutes}'
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

export default connect(mapStateToProps)(Badges);
