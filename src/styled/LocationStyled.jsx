import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    font-size: 10px;
    color: #92D6EE;
    margin: 0  0 0 .8em;
`;

const LocationStyled = ({ location }) => <StyledSpan> <i className="fas fa-map-marker-alt"></i> {location}</StyledSpan>;

export default LocationStyled;