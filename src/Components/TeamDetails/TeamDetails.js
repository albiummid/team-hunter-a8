import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import "./TeamDetails.css";
import male from '../../Photo/male.png'
import female from '../../Photo/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faFlag, faFutbol, faVenusMars, faLink } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {

    const [team, setTeam] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(response =>response.json())
        .then(data => setTeam(data.teams[0]))
    }, [id])

    const { strTeamBadge, intFormedYear, strCountry, strGender, strSport, strTeam, strDescriptionEN, strYoutube, strFacebook, strInstagram,strTwitter, strWebsite,strStadiumDescription } = team;
    const linkPrefix = 'https://';
    return (
        <div className='team-container'>
            <Header> <div className="teamBadge"> <img src={strTeamBadge} alt="" /> </div> </Header>
            <div className="info-div">
                <div className="team-info">
                    <h1>{strTeam}</h1>
                    <br/>
                    <h3><FontAwesomeIcon icon={faMapMarkedAlt} />  Founded:   {intFormedYear} </h3>
                    <h3><FontAwesomeIcon icon={faFlag} />  Country:   {strCountry}</h3>
                    <h3><FontAwesomeIcon icon={faFutbol} />  Sport Type:   {strSport}</h3>
                    <h3><FontAwesomeIcon icon={faVenusMars} />  Gender:   {strGender} </h3>
                  
                </div>
                {
                    strGender === "Female" ?  <img className="team-photo" src={female} alt="Female" /> : <img className="team-photo" src={male} alt="Male" />
                }
            </div>
            <div className="descriptions">
                <h2>About Us</h2>
            <p>
                    {strDescriptionEN}
                </p>
                <br />
                <br />
                <h2>About Stadium</h2>
                <p>
                    {strStadiumDescription}
                </p>
            </div>

            <div className="social-links">
                <a href={linkPrefix + strFacebook}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                
                <a href={linkPrefix + strInstagram}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                
                <a href={linkPrefix + strYoutube}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>

                <a href={linkPrefix + strWebsite}><FontAwesomeIcon icon={faLink} size="2x" /></a>

                <a href={linkPrefix + strTwitter}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            </div>
            
            
                
          
        </div>
    );
};

export default TeamDetails;