import React from 'react';
import "./TeamCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const TeamCard = (props) => {

    const { strTeamBadge, strTeam,idTeam ,strSport} = props.team;
    const clickHandler = props.clickHandler;
    return (
        <div className="teamCard">
                <img src={strTeamBadge} alt=""/>
                <h2> { strTeam}</h2>
                <p>Sports type: {strSport} </p>
                <button onClick={() =>clickHandler(idTeam)}> Details  <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
    );
};

export default TeamCard;