import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    font-size: 10px;
    color: #92D6EE;
`;

const SpanStyled = ({ date }) => <StyledSpan><i className="fas fa-calendar-alt"></i> {date} </StyledSpan>;

export default SpanStyled;