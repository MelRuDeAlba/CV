import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    margin: 1em 0 0.2em 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #513773;
`;

const H3Styled = ({ name }) => <StyledH3>{name}</StyledH3>;

export default H3Styled;