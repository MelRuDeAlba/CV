import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-weight: 600;
    letter-spacing: .8px;
    color: #513773;
    text-transform: uppercase;
    border-bottom: 1px solid #513773;
    margin: 1em 0 .5em 0;
`;

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>;

export default H2Styled;