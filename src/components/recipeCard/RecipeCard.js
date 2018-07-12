import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare
} from '@fortawesome/free-brands-svg-icons';

import './style.css';

//! component style
import styled from 'styled-components';

let cardContainer = {
  marginTop: '1em',
  borderBottom: '1px solid #eeeeee'
};

let imgContainerStyle = {
  height: '120px',
  width: '120px',
  overflow: 'hidden',
  marginRight: '2em',
  boxShadow: '2px 2px 2px #eeeeee',
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

const RecipeCard = ({ id, title, readyInMinutes, servings, image }) => {
  return (
    <div>
      <Media style={cardContainer}>
        <Media left style={imgContainerStyle}>
          <Link to={`/recipes/recipe/${id}`}>
            <Image
              className="img-fluid"
              object
              src="/dashboard-bg.jpg"
              alt="Recipe Image"
              alt="Recipe Image"
            />
          </Link>
        </Media>

        <Media body style={{ display: 'flex', flexDirection: 'column' }}>
          <Media heading>fake placeholder title here{title}</Media>
          <div style={flexStyle1}>
            <p style={{ marginRight: '1em' }}>
              Ready in 33<span style={spanStyle}>{readyInMinutes}</span> min.
            </p>
            <p style={{ marginRight: '1em' }}>
              Serves 3<span style={spanStyle}>{servings}</span> people
            </p>
          </div>
          <div style={flexStyle2}>
            <button className="btn btn-outline-success btn-sm">
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

export default RecipeCard;

// left bottom
// left top
// left middle

// {`https://spoonacular.com/recipeImages/${image}`}

// "/dashboard-bg.jpg" alt="Recipe Image"
