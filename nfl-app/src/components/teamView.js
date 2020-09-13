import React from 'react';

class Team extends React.Component {
    render(){
        return (
            <p>{this.props.team.name}</p>
        )
    } 
}

export default Team;