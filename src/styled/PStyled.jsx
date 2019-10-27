import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    margin: 0 0 0 0;
    font-weight: 300;
    font-size: 14px;
    color: #0E0C27;
`;

const PStyled = ({ name }) => <StyledP>{name}</StyledP>;

export default PStyled;