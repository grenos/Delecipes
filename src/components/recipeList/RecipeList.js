import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../recipeCard/RecipeCard';
import { Container, Row } from 'reactstrap';
import { createSearch } from '../../HOC/hoc';
import SearchAlt from './SearchAlt';
import { searchRecipes, recipeSum } from '../../redux/actions/actions';
let spanStyle = {
  fontFamily: 'Alegreya',
  color: '#259A35'
};

const RecipeList = props => {
  return (
    <Container style={{ paddingTop: '70px' }}>
      <Row className="justify-content-center">
        <div className="col-md-8">
          <SearchAlt
            onSubmit={recipeData => {
              props.searchRecipes(recipeData);
            }}
          />
        </div>
      </Row>
      <h5>
        Results found <span style={spanStyle}> {props.searchData}</span>
      </h5>

      <Row className="justify-content-center">
        {/* HOC component -- has no use here -- kept for reference */}
        {/* {createSearch()} */}
        <div className="col-md-8">
          {props.recipes.map(recipe => {
            return <RecipeCard key={recipe.id} {...recipe} />;
          })}

          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </Row>
    </Container>
  );
};

// determines what infop from the store we provide to the 'connect' component
const mapStateToProps = state => {
  return {
    recipes: state.apiReducer.recipes,
    searchData: state.apiReducer.searchData
  };
};

export default connect(
  mapStateToProps,
  { searchRecipes }
)(RecipeList);
//export default RecipeList;
