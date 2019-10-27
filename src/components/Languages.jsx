import React  from 'react';
import styled from 'styled-components';
import H2Styled from '../styled/H2Styled';

const LanguagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
    text-align: center;
`;

const LanguagesItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    grid-row-gap: 0.5em;
    font-weight: 600;
`;

const LanguagesRate = styled.div`
    color: #513773;
    padding: 1em 0 0 0;
`;


const Languages = () => (
    <div className="Languages">
        <H2Styled name={'Languages'} />
        <LanguagesContainer>
            <LanguagesItem>
                <p>Spanish - Native</p>
                <LanguagesRate>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                </LanguagesRate>
            </LanguagesItem>
            <LanguagesItem>
                <p>English - Intermediate</p>
                <LanguagesRate>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="far fa-circle"></i>
                    <i className="far fa-circle"></i>
                </LanguagesRate>
            </LanguagesItem>
        </LanguagesContainer>
    </div>
);

export default Languages;