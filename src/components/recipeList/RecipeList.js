import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../recipeCard/RecipeCard';
import { Container, Row } from 'reactstrap';
import SearchAlt from './SearchAlt';
import Waypoint from 'react-waypoint';

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

class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   showWaypoint: true
    // };
  }

  // call waypoint after the initial component render to avoid auto-calling it at init
  componentDidUpdate() {
    // get values from redux store (mapStateToProps)
    this._handleWaypointEnter = () => {
      // const page = offset + 10;
      // this.props.searchRecipes(
      //   this.props.recipeInputText,
      //   this.props.recipeStyle
      // );
      console.log('fires');
    };
  }

  render() {
    // capitalise the input text for the global results header
    let capitalise = capitalizer(this.props.recipeInputText);

    return (
      <div>
        <Container style={{ padding: '70px 0 50px 0' }}>
          <MyNavbar />

          <Row className="justify-content-center">
            <div className="col-md-8">
              <SearchAlt
                onSubmit={recipeData => {
                  // call api
                  this.props.searchRecipes(recipeData);
                  // dispatch search data to save to store
                  store.dispatch(recipeInput(recipeData));
                }}
              />
            </div>
          </Row>

          <Row className="justify-content-center">
            <div className="col-md-8">
              <h5 style={{ paddingBottom: '.5em' }}>
                {this.props.searchData}
                <span style={spanStyle}> results for </span>
                {capitalise}
              </h5>

              {this.props.recipes.map(recipe => {
                return <RecipeCard key={recipe.id} {...recipe} />;
              })}

              {/* <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard /> */}

              <Waypoint onEnter={this._handleWaypointEnter} />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

// determines what infop from the store we provide to the 'connect' component
// 1 recipes ..
// 2 searchData = number of returned results
// 3 recipeInputText ..
// 4 recipeStyle ..
const mapStateToProps = state => {
  return {
    recipes: state.apiReducer.recipes,
    searchData: state.apiReducer.searchData,
    recipeInputText: state.apiReducer.recipeInput,
    recipeStyle: state.apiReducer.recipeStyle
  };
};

export default connect(
  mapStateToProps,
  { searchRecipes, recipeInput }
)(RecipeList);
