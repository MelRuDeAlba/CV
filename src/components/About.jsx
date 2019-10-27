import React  from 'react';
import Social from './Social';

const About = ({ avatar_url, name, location, bio, social }) => (
    <div className="About">
        <div className="About-container">
           <div className="About-avatar">
               <figure>
                   <img src={avatar_url} alt={name} />
               </figure>
           </div>
           <div className="About-name">
               <h2>{name}</h2>
           </div>
           <div className="About-profession">
               <p>FrontEnd Developer</p>
           </div>
           <div className="About-description">
                <p>
                   {bio}
                </p>
           </div>
           <div className="About-location">
               <p>{location}</p>
           </div>
           <div className="About-social">
               <Social social={social} />
           </div>
        </div>
    </div>
);

export default About;