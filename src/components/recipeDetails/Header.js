import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

//import recipeResponse from '../../../recipeResponse.json';

const Header = props => {
  const { title, sourceName, sourceUrl } = props.recipeInfo;

  return (
    <Row>
      <div className="col-md-12 mb-4">
        <h1 className="recipe-info-title" style={{ fontSize: '3em' }}>
          {title}
        </h1>
        <div className="col-md-12" className="make-flex-row">
          <h5>
            <span className="quote-span">written by</span> {sourceName}
          </h5>
          <h5 style={{ marginLeft: '5px' }}>
            <a className="quote-span" href={sourceUrl}>
              Original Article
            </a>
          </h5>
        </div>
      </div>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

export default connect(mapStateToProps)(Header);
