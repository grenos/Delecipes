import React from 'react';
import { connect } from 'react-redux';

//! global css
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//! import components
import { Container, Row } from 'reactstrap';
import Header from './Header';
import Search from './Search';

//! redux components
import {
  searchRecipes,
  recipeInput,
  resetState
} from '../../redux/actions/actions';
import store from '../../redux/store/configureStore';

//! component style
import { media } from '../../helpers/mediaQTemplate';
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url('/dashboard.jpg') no-repeat center center;
  background-size: cover;

  ${media.ipad`
    height: 50vh;
  `};
`;

const TextBox = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.ipad`
    height: 50vh;   
  `};
`;

const InputBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.ipad`
    height: 50vh;
    padding: 0;
  `};
`;

const Dashboard = props => {
  return (
    <div>
      <Main>
        <Container fluid>
          <Row>
            <TextBox className="col-md-12 col-lg-6">
              <Header />
            </TextBox>
            <InputBox className="col-md-12 col-lg-6 ipad-mq">
              <Search
                onSubmit={recipeData => {
                  store.dispatch(resetState());
                  props.searchRecipes(recipeData);
                  store.dispatch(recipeInput(recipeData));
                }}
              />
            </InputBox>
          </Row>
        </Container>
      </Main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.apiReducer.error
  };
};

export default connect(
  mapStateToProps,
  { searchRecipes, recipeInput, resetState }
)(Dashboard);
