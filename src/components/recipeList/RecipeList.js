import React from 'react';
import { connect } from 'react-redux';

const RecipeList = props => {
  return (
    <div>
      <h1>this is recipeList</h1>
      {props.recipes.map(recipe => {
        return <h4 key={recipe.id}>{recipe.title}</h4>;
      })}
    </div>
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
