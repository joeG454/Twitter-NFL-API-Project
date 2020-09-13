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
                return team.name.indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div>
                <div class="wrap">
                    <div class="search">
                        <input type="text"  class="searchTerm" 
                            value={this.state.search} 
                            onChange={this.updateSearch.bind(this)}/>
                        <button type="submit"  class="searchButton">
                            <FontAwesomeIcon
                                    icon={faSearch}
                                />
                        </button>
                    </div>
                </div>
            
                <ul>
                    {
                        filteredTeams.map((team) => {
                            return <Team team={team}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TeamList;