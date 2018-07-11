import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../recipeCard/RecipeCard';
import { Container, Row } from 'reactstrap';

const RecipeList = props => {
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="col-md-8">
          <h1>this is recipeList</h1>
          {props.recipes.map(recipe => {
            return <RecipeCard key={recipe.id} {...recipe} />;
          })}
        </div>
      </Row>
    </Container>
  );
};

// determines what infop from the store we provide to the 'connect' component
const mapStateToProps = state => {
  return {
    recipes: state.apiReducer.recipes
  };
};

export default connect(mapStateToProps)(RecipeList);
//export default RecipeList;
