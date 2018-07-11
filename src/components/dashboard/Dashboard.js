import React, { Component } from 'react';
//import PropTypes from 'prop-types';

//import { connect } from 'react-redux';

//import { searchRecipes } from '../../redux/actions/getRecipesActions';

import { Jumbotron, Container, Row } from 'reactstrap';

import Header from './Header';
import Search from './Search';
import MyNavbar from '../navbar/MyNavbar';

import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url('dashboard-bg.jpg') no-repeat center center;
  background-size: cover;
`;

const TextBox = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Dashboard extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   recipeInput: '',
  //   //   recipeStyle: '',
  //   //   recipes: [],
  //   //   recipe: {}
  //   // };
  // }

  // getInputData = inputData => {
  //   this.setState({
  //     recipeInput: inputData
  //   });
  // };

  // getSelectData = selectData => {
  //   this.setState({
  //     recipeStyle: selectData
  //   });
  // };

  //! get values (object) from serach component to dispatch
  //submitForm = recipeData => {
  //searchRecipes(recipeData);
  //props.dispatch(searchRecipes(recipeData));
  //props.history.push('/');
  // this.searchRecipes();
  //};

  //searchRecipes = () => {
  //console.log(process.env.REACT_APP_RECIPE_API_KEY);
  // axios
  //   .get(
  //     `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${
  //       this.state.recipeStyle
  //     }&instructionsRequired=true&limitLicense=false&number=30&offset=0&query=${
  //       this.state.recipeInput
  //     }`,
  //     {
  //       headers: {
  //         'X-Mashape-Key': process.env.REACT_APP_RECIPE_API_KEY,
  //         Accept: 'application/json'
  //       }
  //     }
  //   )
  //   .then(res => {
  //     this.setState({ recipes: res.data.results });
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  //};

  render() {
    return (
      <div>
        <MyNavbar />
        <Main className="jumbotron jumbotron-fluid">
          <Container fluid>
            <Row>
              <TextBox className="col-md-6">
                <Header />
              </TextBox>
              <InputBox className="col-md-6">
                <Search submitForm={this.submitForm} />
              </InputBox>
            </Row>
          </Container>
        </Main>
      </div>
    );
  }
}

export default Dashboard;

//Jumbotron.propTypes = {};

// const mapStateToProps = state => {
//   return state;
// };

// export default connect(
//   mapStateToProps,
//   searchRecipes
// )(Dashboard);

// id
// :
// 569765
// image
// :
// "Cheeseburger-Pizza-569765.jpg"
// imageUrls
// :
// ["Cheeseburger-Pizza-569765.jpg"]
// readyInMinutes
// :
// 45
// servings
// :
// 6
// title
// :
// "Cheeseburger Pizza"

{
  /* getInputData={this.getInputData}
                  getSelectData={this.getSelectData} */
}
