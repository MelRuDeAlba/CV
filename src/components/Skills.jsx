import React  from 'react';
import styled from 'styled-components';
import H2Styled from '../styled/H2Styled';

const SkillList = [
    'React',
    'Redux',
    'Javascript',
    'jQuery',
    'HTML',
    'CSS',
    'SASS',
    'Bootstrap',
    'PHP',
    'Laravel',
    'Scriptcase',
    'Git',
    'GitLab',
    'Trello',
];

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
    text-align: center;
    font-size: 12px;
`;

const SkillsItem = styled.p`
    padding: .5em 1em;
    margin: 0;
    font-weight: 600;
    width: fit-content;
    border-bottom: 1px solid #0E0C27;
`;


const Skills = () => (
    <div className="Skills">
        <H2Styled name={'Skills'} />
        <SkillsContainer>
            {SkillList.map( (item, index) => (
                    <SkillsItem key={`skills-${index}`}>
                        {item}
                    </SkillsItem>
                ))}
        </SkillsContainer>
    </div>
);

export default Skills;