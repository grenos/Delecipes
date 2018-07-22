import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Row } from 'reactstrap';

import MyNavbar from '../navbar/MyNavbar';
import Header from './Header';
import TopWindow from './TopWindow';
import Badges from './Badges';
import IngredientCard from './IngredientCard';
import RecipeInstructions from './RecipeInstructions';
import Wines from './Wines';

// import recipeResponse from '../../../recipeResponse.json';

import './style.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props.recipeInfo;

    return (
      <Container className="wrapper">
        <MyNavbar />

        <div>
          <Link to="/recipes" className="back-link anim-fa-in">
            Back
          </Link>
        </div>

        <Row className="justify-content-center anim-fa-in">
          <div className="col-md-10">
            <Header />
          </div>

          <div className="col-md-10">
            <TopWindow />
          </div>

          <div className="col-md-10">
            <Badges />
          </div>

          <div className="col-md-10 mb-5">
            <h3 className="recipe-info-title">Ingredients</h3>
            <IngredientCard />
          </div>

          <div className="col-md-10 mb-5">
            <h3 className="recipe-info-title">Instructions</h3>
            <RecipeInstructions />
          </div>

          <div className="col-md-10">
            <h3 className="recipe-info-title">
              Wines that go well with {title}
            </h3>
            <Wines />
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo,
    recipeSum: state.apiReducer.recipeSum,
    loading: state.apiReducer.loading,
    error: state.apiReducer.error
  };
};

export default connect(mapStateToProps)(Recipe);
