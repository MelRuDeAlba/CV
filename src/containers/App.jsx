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

const App = () => {
    return (
        <Main>
            <Sidebar>
                <About />
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