import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Team from './teamView';

class TeamList extends React.Component {
    constructor () {
        super();
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value})
    }
    
    render() {
        let filteredTeams = this.props.teams.filter(
            (team) => {
                return team.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div>
                <div className="wrap mx-auto text-center">
                    <div className="search">
                        <input type="text" className="searchTerm"  placeholder="Search for A Team"
                            value={this.state.search} 
                            onChange={this.updateSearch.bind(this)}/>
                        <button type="submit"  className="searchButton">
                            <FontAwesomeIcon
                                    icon={faSearch}
                                />
                        </button>
                    </div>
                </div>
            
                <div className="margin-top-20">
                    {
                        filteredTeams.map((team) => {
                            return <Team team={team} key={team.id}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TeamList;