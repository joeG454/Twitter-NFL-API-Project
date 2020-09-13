import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { render } from 'react-dom';

export default class Search extends React.Component {
    render() {
        return (
            <div class="wrap">
                <div class="search">
                    <input type="text"  class="searchTerm" placeholder="Search For A Team"></input>
                    <button type="submit"  class="searchButton">
                        <FontAwesomeIcon
                                icon={faSearch}
                            />
                    </button>
                </div>
            </div>
        );
    }
  }