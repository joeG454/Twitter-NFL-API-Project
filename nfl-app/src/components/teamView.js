import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Team extends React.Component {
    render(){
        const teamNameStyle = {
            backgroundColor: this.props.team.background,
            color: this.props.team.color
        };
        return (
            <div className="team-card display-flex justify-content-between">
                <div className="team-label" style={teamNameStyle}>{this.props.team.name}</div>
                <div  className="expandButton">
                            <FontAwesomeIcon
                                    icon={faPlus} color='#1A1A1B'
                                />
                        </div>
            </div>
        )
    } 
}

export default Team;