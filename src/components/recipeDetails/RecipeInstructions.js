import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

// import recipeResponse from '../../../recipeResponse.json';

const RecipeInstructions = props => {
  const { analyzedInstructions } = props.recipeInfo;

  return (
    <div>
      {analyzedInstructions.map(allSteps => {
        return allSteps.steps.map((individualStep, index) => {
          return (
            <div key={index}>
              <ListGroup>
                <ListGroupItem className="justify-content-between instruction-list-item">
                  <Badge color="warning" className="ol-badges" pill>
                    {index + 1}
                  </Badge>{' '}
                  {individualStep.step}
                </ListGroupItem>
              </ListGroup>
            </div>
          );
        });
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

export default connect(mapStateToProps)(RecipeInstructions);
