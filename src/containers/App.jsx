import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Extra from '../components/Extra';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #5de6de;
        background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
    }    
`;

const App = () => {
    const data = useGetData();
    return data.length===0 ? <h1>Cargando...</h1> : (
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
                <Extra />
            </Info>
        </Main>
    );
}

export default App;