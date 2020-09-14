import React from 'react';
import { getTeamTweets } from '../services/teamService';

class Team extends React.Component {
    constructor () {
        super();
        this.state = {
            isActive: false
        };
    }
    
    expandTeam(e, data) {
        console.log(getTeamTweets(e));
        return (this.state.isActive ? this.setState({isActive: false}) : this.setState({isActive: true}));
    }

    render(){
        const teamNameStyle = {
            backgroundColor: this.props.team.background,
            color: this.props.team.color
        };
        let className = 'collapsible team-card display-flex justify-content-between';
        if (this.state.isActive) {
            className = 'active collapsible team-card display-flex justify-content-between';
        }
        return (
            <div className="team-card-wrapper">
                <div onClick={this.expandTeam.bind(this)} className={className}>
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