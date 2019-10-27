import React  from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: pink;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color};
`;

const linkedin = {
    color: "#0E76A8"
}

const github = {
    color: "#333"
}

const getColor = (name) => {
    if(name === 'linkedin') return linkedin;
    if(name === 'github') return github;
}

const Social = props => (
    <SocialStyle>
        {props.social &&
            <SocialUl>
                {props.social.map( (item, index) => (
                    <SocialLi key={`social-${index}`}>
                        <SocialAnchor href={item.url} target="_blank">
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fab fa-${item.name}`} />
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))}
            </SocialUl>
        }
    </SocialStyle>
);

export default Social;