import React  from 'react';
import styled from 'styled-components';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import DateStyled from '../styled/DateStyled';
import LocationStyled from '../styled/LocationStyled';
import CompanyStyled from '../styled/CompanyStyled';

const StyledDiv = styled.div`
     margin: 0 0 1em 0;
`;

const Experience = () => (
    <div className="Experience">
        <H2Styled name={'Experience'} />
        <div className="Experience-container">
           <div className="Experience-item">
                <H3Styled name={'Front-end Developer'} />
                <CompanyStyled company={'Ixtle Networks S.A. de C.V.'} />
                <StyledDiv>
                    <DateStyled date={'2016 - 2019'} /> 
                    <LocationStyled location={'Guadalajara, Jalisco. México'} />
                </StyledDiv>                
                <PStyled name={'Projects with ReactcCalling RESTful API secured with OAuth, we create the user interface where they can check their profiles, contact others and upload documents.'} />
                <PStyled name={'Projects with Scriptcase, CRM created with php and javascript.'} />
           </div>
           <div className="Experience-item">
                <H3Styled name={'Front-end Developer'} />
                <CompanyStyled company={'CORB Consultoría Informática'} />
                <StyledDiv>
                    <DateStyled date={'2015'} /> 
                    <LocationStyled location={'Guadalajara, Jalisco. México'} />
                </StyledDiv>                
                <PStyled name={'Angular Project. Adding features to existing applications.'} />
           </div>
           <div className="Experience-item">
                <H3Styled name={'Web Developer'} />
                <CompanyStyled company={'Freelance'} />
                <StyledDiv />
                <PStyled name={'Worked with a team from Ecuador in 2 projects with Scriptcase using php and jQuery.'} />
                <PStyled name={'Appointment scheduling software.'} />
                <PStyled name={'Document Management.'} />
           </div>
        </div>
    </div>
);

export default Experience;