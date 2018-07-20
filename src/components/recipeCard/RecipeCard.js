import React from 'react';
import { connect } from 'react-redux';

import { searchRecipeInfo } from '../../redux/actions/actions';
import store from '../../redux/store/configureStore';

//! Reactstrap
import { Media } from 'reactstrap';

//! fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare
} from '@fortawesome/free-brands-svg-icons';

//! component style
import './style.css';
import styled from 'styled-components';

let cardContainer = {
  marginTop: '1em',
  background: 'white',
  padding: '1em 1em 0 1em',
  borderRadius: '.25em',
  boxShadow: '1px 1px 10px #757575'
};

let imgContainerStyle = {
  height: '120px',
  width: '120px',
  overflow: 'hidden',
  marginRight: '2em',
  paddingBottom: '2em',
  marginBottom: '1em',
  borderRadius: '.25em'
};

const Image = styled.img`
  max-width: 210%;
  max-height: 210%;
`;

const Social = styled.div`
  display: flex;
`;

let iconStyle = {
  marginRight: '.3em',
  fontSize: '2em',
  color: '#259A35'
};

let flexStyle1 = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-start'
};

let flexStyle2 = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '.3em',
  marginBottom: '.3em'
};

let spanStyle = {
  fontFamily: 'Alegreya',
  color: '#259A35'
};

const RecipeCard = props => {
  //
  const { id, title, readyInMinutes, servings, image } = props.recipe;

  return (
    <div>
      <Media className="anim-fa-in" style={cardContainer}>
        <Media left style={imgContainerStyle}>
          <Image
            className="img-fluid"
            object
            src={`https://spoonacular.com/recipeImages/${image}`}
            alt="Recipe Image"
            onClick={() => {
              props.searchRecipeInfo({ id, title });
            }}
          />
        </Media>

        <Media body style={{ display: 'flex', flexDirection: 'column' }}>
          <Media
            heading
            className="title"
            style={{ fontWeight: '600', color: '#212121' }}
            onClick={() => {
              props.searchRecipeInfo({ id, title });
            }}
          >
            {title}
          </Media>
          <div style={flexStyle1}>
            <p style={{ marginRight: '1em' }}>
              Ready in <span style={spanStyle}>{readyInMinutes}</span> min.
            </p>
            <p style={{ marginRight: '1em' }}>
              Serves <span style={spanStyle}>{servings}</span> people
            </p>
          </div>
          <div style={flexStyle2}>
            <button
              className="btn btn-success btn-sm buttonStyle"
              onClick={() => {
                props.searchRecipeInfo({ id, title });
              }}
            >
              Go to Recipe
            </button>
            <Social>
              <FontAwesomeIcon icon={faFacebookSquare} style={iconStyle} />
              <FontAwesomeIcon icon={faTwitterSquare} style={iconStyle} />
              <FontAwesomeIcon icon={faGooglePlusSquare} style={iconStyle} />
            </Social>
          </div>
        </Media>
      </Media>
    </div>
  );
};

export default connect(
  null,
  { searchRecipeInfo }
)(RecipeCard);
