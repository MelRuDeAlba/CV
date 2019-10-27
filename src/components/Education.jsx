import React  from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import DateStyled from '../styled/DateStyled';

const Education = () => (
    <div className="Education">
        <H2Styled name="Education" />
        <div className="Education-container">
           <div className="Education-item">
               <H3Styled name={'Bachelor of Information Technology'}/>
               <PStyled name={'University of Guadalajara CUCEI'}></PStyled>
               <DateStyled date={'2011 - 2015'}/>
           </div>
        </div>
    </div>
);

export default Education;