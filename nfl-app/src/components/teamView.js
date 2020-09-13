import React from 'react';
import { getTeamTweets } from '../services/teamService';

class Team extends React.Component {
    expandTeam(e, data) {
        console.log('here: ' + e);
        console.log(getTeamTweets(e));
        // TODO: Expand card and hit the twitter API
    }

    render(){
        const teamNameStyle = {
            backgroundColor: this.props.team.background,
            color: this.props.team.color
        };
        return (
            <div className="">
                <div onClick={this.expandTeam.bind(this, '#Vikings')} className="collapsible team-card display-flex justify-content-between">
                    <div className="team-label" style={teamNameStyle}>{this.props.team.name}</div>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
            </div>
            
        )
    } 
}

export default Team;