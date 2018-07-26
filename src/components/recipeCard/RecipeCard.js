import React from 'react';
import { connect } from 'react-redux';

import { searchRecipeInfo, getRecipeSum } from '../../redux/actions/actions';

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

const Social = styled.div`
  display: flex;
`;

const RecipeCard = props => {
  //
  const { id, title, readyInMinutes, servings, image } = props.recipe;

  const FBShare = () => {
    FB.ui(
      {
        method: 'share',
        display: 'popup',
        href: 'https://developers.facebook.com/docs/'
      },
      function(response) {}
    );
  };

  return (
    <div>
      <Media className="anim-fa-in card-wrapper">
        <Media left className="card__img-container">
          <img
            className="img-fluid card__img"
            src={`https://spoonacular.com/recipeImages/${image}`}
            alt="Recipe Image"
            onClick={() => {
              props.searchRecipeInfo({ id, title });
              props.getRecipeSum(id);
            }}
          />
        </Media>

        <Media body className="flex-helper-column">
          <Media
            heading
            className="card__header card__header--color"
            onClick={() => {
              props.searchRecipeInfo({ id, title });
              props.getRecipeSum(id);
            }}
          >
            {title}
          </Media>
          <div className="flex-helper-row">
            <p className="card__details">
              Ready in{' '}
              <span className="card__details--span">{readyInMinutes}</span> min.
            </p>
            <p className="card__details">
              Serves <span className="card__details--span">{servings}</span>{' '}
              people
            </p>
          </div>
          <div className="flex-helper-row--spacing">
            <button
              className="btn btn-success btn-sm button--spacing"
              onClick={() => {
                props.searchRecipeInfo({ id, title });
                props.getRecipeSum(id);
              }}
            >
              Go to Recipe
            </button>
            <Social>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="icon--main-style"
                onClick={FBShare}
              />
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="icon--main-style"
              />
              <FontAwesomeIcon
                icon={faGooglePlusSquare}
                className="icon--main-style"
              />
            </Social>
          </div>
        </Media>
      </Media>
    </div>
  );
};

export default connect(
  null,
  { searchRecipeInfo, getRecipeSum }
)(RecipeCard);
