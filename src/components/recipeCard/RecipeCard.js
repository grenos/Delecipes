import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

//! component style
import styled from 'styled-components';

let cardContainer = {
  marginTop: '2em',
  borderBottom: '1px solid #eeeeee'
};

let imgContainerStyle = {
  height: '150px',
  width: '150px',
  overflow: 'hidden',
  marginRight: '3em',
  boxShadow: '1px 1px 2px #eeeeee',
  paddingBottom: '2em',
  marginBottom: '2em',
  borderRadius: '.25em'
};

const Image = styled.img`
  max-width: 200%;
  max-height: 200%;
`;

const RecipeCard = ({ id, title, readyInMinutes, image }) => {
  return (
    <div>
      <Media style={cardContainer}>
        <Media left middle style={imgContainerStyle}>
          <Link to={`/recipes/recipe/${id}`}>
            <Image
              object
              src={`https://spoonacular.com/recipeImages/${image}`}
              alt="Recipe Image"
            />
          </Link>
        </Media>

        <Media body middle>
          <Media heading>{title}</Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
  );
};

export default RecipeCard;

// left bottom
// left top
// left middle
