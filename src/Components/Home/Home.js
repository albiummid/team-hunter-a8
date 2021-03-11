import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import TeamCard from '../TeamCard/TeamCard';
import "./Home.css";

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data.teams))
    }, [])

    const history = useHistory();
    const clickHandler = (id) => {
        const url = `/details/${id}`;
        history.push(url);
    }

    return (
        <div div className="homeContainer">
            <Header> <div className="title">
                <h1> />/---Team Hunter---/>/ </h1>
            </div></Header>
            <div className="cardHolder">
                {
                    teams.map(team => <TeamCard clickHandler={clickHandler} team={team}> </TeamCard>)
                }
            </div>
        </div>
    );
};

export default Home;