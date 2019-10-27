import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Extra from '../components/Extra';
import Languages from '../components/Languages';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';

const App = () => {
    const data = useGetData();
    return data.length===0 ? <h1>Cargando...</h1> : (
        <Main>
            <Sidebar>
                <About 
                    avatar_url={data.avatar_url}
                    name={data.name}
                    location={data.location}
                    bio={data.bio}
                    social={[{
                        name: 'linkedin',
                        url: data.url
                    },{
                        name: 'github',
                        url: data.url
                    }]}
                />
            </Sidebar>
            <Info>
                <Education />
                <Experience />
                <Languages />
                <Skills />
                <Extra />
            </Info>
        </Main>
    );
}

export default App;