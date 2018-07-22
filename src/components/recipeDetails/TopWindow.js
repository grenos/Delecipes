import React from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import { Row } from 'reactstrap';

// import recipeResponse from '../../../recipeResponse.json';
//import sumResponse from '../../../sumResponse.json';

const TopWindow = props => {
  const { image } = props.recipeInfo;
  const recipeSum = props.recipeSum;

  // purify html
  const text = DOMPurify.sanitize(recipeSum);

  return (
    <Row className="top-window-wrapper">
      <div className="col-md-6">
        <img className="top-window-img" src={image} alt="recipe image" />
      </div>
      <div className="col-md-6">
        <h5
          className="recipe-sum"
          dangerouslySetInnerHTML={{ __html: `${text}` }}
        />
      </div>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo,
    recipeSum: state.apiReducer.recipeSum
  };
};

export default connect(mapStateToProps)(TopWindow);
