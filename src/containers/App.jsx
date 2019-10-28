import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Loading from '../components/Loading';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import useGetData from '../hooks/useGetData';

const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100%; 
        background-size: cover;
        background: #5de6de;
        background-repeat:no-repeat;
        background: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
    }
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }    
`;

const App = () => {
    const data = useGetData();
    return data.length === 0 ? (<><GlobalStyle/><Loading /></>) : (
        <Main>
            <GlobalStyle/>
            <Sidebar>
                <About 
                    avatar_url={data.avatar_url}
                    name={data.name}
                    location={data.location}
                    bio={data.bio}
                    social={[{
                        name: 'linkedin',
                        url: data.blog
                    },{
                        name: 'github',
                        url: data.html_url
                    }]}
                />
            </Sidebar>
            <Info>
                <Education />
                <Experience />
                <Skills />
                <Languages />
            </Info>
        </Main>
    );
}

export default App;