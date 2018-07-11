import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const BigTitle = styled.h1`
  margin-top: 0.2em;
  color: white;
  font-size: 13vw;
  line-height: 0.79em;
`;

const SpanText1 = styled.span`
  font-size: 6vw;
  line-height: 0.79em;
`;

const SpanText2 = styled.span`
  color: #259a35;
`;

export default () => {
  return (
    <div>
      <BigTitle>
        <SpanText1>The</SpanText1> <SpanText2>best</SpanText2> recipes for your
        cousine
      </BigTitle>
    </div>
  );
};
