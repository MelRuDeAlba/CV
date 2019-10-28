import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
    0% { margin-bottom: 0; }
    50% { margin-bottom: 15px; }
    100% { margin-bottom: 0; }
`;

const ColorAnimation = keyframes`
    from {background-color: #5de6de;}
    to {background-color: #b58ecc;}
`;

const DotWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;

const Dot = styled.div`
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    /* Animation */
    animation: ${ColorAnimation} 2s linear infinite, ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${props => props.delay};
`;

const LoadingStyled = styled.div`
    width: 200px;
    height: 100px;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;    
    margin: auto;
`;

const  LoadingH2 = styled.h2`
    font-weight: bold;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #513773;
`;

class Loading extends Component {
    render() {
    return (
        <LoadingStyled>
            <DotWrapper>
                <LoadingH2>Loading</LoadingH2>
                <Dot delay="0s" />
                <Dot delay=".1s" />
                <Dot delay=".2s" />
                <Dot delay=".3s" />
            </DotWrapper>
        </LoadingStyled>
    )
    }
}
export default Loading