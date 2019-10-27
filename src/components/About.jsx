import React  from 'react';
import Social from './Social';
import styled from 'styled-components';

const  AboutStyles = styled.div`
    text-align: center;
    padding: .5em;
`;

const  AboutAvatar = styled.div`
   padding: 2em 0 0 0;
`;

const  AboutImg = styled.img`
   border-radius: 100%;
   width 150px;
   height 150px;
   border: 2px solid #6E5694;
   margin: 0 auto;
   display: block;
   box-shadow: 0 0 20px rgba(81,55,115,0.8);
`;

const  AboutName = styled.div`
    text-align: center;
`;

const  AboutH2 = styled.h2`
    font-weight: bold;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #513773;
`;

const  AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #513773;
`;
const  AboutMail = styled.p`
    margin: .2em 0 1em 0;
    font-size: 12px;
    color: #513773;
`;

const  AboutBio = styled.p`
    font-weight: 300;
    font-size: 14px;
    color: #0E0C27 ;
`;

const  AboutLocation = styled.p`
    font-weight: 400;
    font-size: 1em;
    color: #0E0C27 ;
`;

const About = ({ avatar_url, name, location, bio, social }) => (
    <AboutStyles>
        <div className="About-container">
           <AboutAvatar>
               <figure>
                   <AboutImg src={avatar_url} alt={name} />
               </figure>
           </AboutAvatar>
           <AboutName>
               <AboutH2>{name}</AboutH2>
           </AboutName>
           <div className="About-profession">
               <AboutProfession>FrontEnd Developer</AboutProfession>
           </div>
           <div className="About-mail">
               <AboutMail><i className="fas fa-envelope"></i> Rubi_93_22@hotmail.com</AboutMail>
           </div>
           <div className="About-description">
                <AboutBio>
                   {bio}
                </AboutBio>
           </div>
           <div className="About-location">
               <AboutLocation>{location}</AboutLocation>
           </div>
           <div className="About-social">
               <Social social={social} />
           </div>
        </div>
    </AboutStyles>
);

export default About;