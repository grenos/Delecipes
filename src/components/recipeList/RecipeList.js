import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../recipeCard/RecipeCard';
import { Container, Row } from 'reactstrap';
//import { createSearch } from '../../HOC/hoc';
import SearchAlt from './SearchAlt';

import MyNavbar from '../navbar/MyNavbar';
import { searchRecipes, recipeInput } from '../../redux/actions/actions';
import store from '../../redux/store/configureStore';
import capitalizer from '../../helpers/capitalizer';

//! CSS
let spanStyle = {
  fontFamily: 'Alegreya',
  fontSize: '1em',
  color: '#259A35'
};

const RecipeList = props => {
  //
  let capitalise = capitalizer(props.recipeData);
  //
  return (
    <div>
      <Container style={{ padding: '70px 0 50px 0' }}>
        <MyNavbar />
        <Row className="justify-content-center">
          <div className="col-md-8">
            <SearchAlt
              onSubmit={recipeData => {
                props.searchRecipes(recipeData);
                store.dispatch(recipeInput(recipeData));
              }}
            />
          </div>
        </Row>

        <Row className="justify-content-center">
          {/* HOC component -- has no use here -- kept for reference */}
          {/* {createSearch()} */}
          <div className="col-md-8">
            <h5 style={{ paddingBottom: '.5em' }}>
              {props.searchData}
              <span style={spanStyle}> results for </span>
              {capitalise}
            </h5>

            {props.recipes.map(recipe => {
              return <RecipeCard key={recipe.id} {...recipe} />;
            })}

            {/* <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard /> */}
          </div>
        </Row>
      </Container>
    </div>
  );
};

// determines what infop from the store we provide to the 'connect' component
const mapStateToProps = state => {
  return {
    recipes: state.apiReducer.recipes,
    searchData: state.apiReducer.searchData,
    recipeData: state.apiReducer.recipeInput
  };
};

export default connect(
  mapStateToProps,
  { searchRecipes, recipeInput }
)(RecipeList);
