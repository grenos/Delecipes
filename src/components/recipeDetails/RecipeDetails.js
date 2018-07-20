import React from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

import MyNavbar from '../navbar/MyNavbar';
import { Container, Row } from 'reactstrap';

import './style.css';
import styled from 'styled-components';

const Recipe = props => {
  //
  // purify html
  var text = DOMPurify.sanitize(props.recipeSum);

  return (
    <Container
      style={{
        padding: '100px 0 50px 0',
        minHeight: '100vh',
        background: 'white'
      }}
    >
      <MyNavbar />
      <Link to="/recipes">Back</Link>
      <Row className="justify-content-center">
        <div className="col-md-10">
          <h1>{props.recipeInfo.title}</h1>
        </div>
        <div className="col-md-5">
          <img
            style={{ width: '100%', height: 'auto' }}
            src={props.recipeInfo.image}
            alt="recipe image"
          />
        </div>
        <div className="col-md-5">
          <p dangerouslySetInnerHTML={{ __html: `${text}` }} />
        </div>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo,
    recipeSum: state.apiReducer.recipeSum,
    loading: state.apiReducer.loading,
    error: state.apiReducer.error
  };
};

export default connect(mapStateToProps)(Recipe);
