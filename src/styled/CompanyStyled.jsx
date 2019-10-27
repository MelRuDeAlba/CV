import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
    margin: 0;
    color: #0E0C27;
`;

const CompanyStyled = ({ company }) => <StyledH4>{company}</StyledH4>;

export default CompanyStyled;