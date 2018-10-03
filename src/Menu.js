import React, { Component } from 'react'
import './Menu.css'
import escapeRegExp from 'escape-string-regexp'
import SearchBar from './SearchBar'

// Places Data
class Menu extends Component {
constructor(props) {
    super(props)
    this.state = {
        query: '',
        venues: this.props.venues,
        filteredVenues: this.props.filteredVenues,
        notVisibleMarkers: [],
        markers: this.props.markers
    } 
}

    updateQuery = (query) => {
        this.setState({ query: query })
        this.state.markers.map(marker => marker.setVisible(true))
        let venues = this.props.filteredVenues
        let filterVenues
        if(this.state.query && (this.state.query !== '')) {
            const match = new RegExp(escapeRegExp(query), 'i');
            filterVenues = venues.filter((place) => match.test(place.venue.name))
            this.setState({filteredVenues: filterVenues})
            this.state.notVisibleMarkers = this.state.markers.filter(marker =>
            filterVenues.every(place => place.venue.name !== marker.title)
      )

            this.state.notVisibleMarkers.forEach(marker => marker.setVisible(false))

            this.setState({ notVisibleMarkers: this.state.notVisibleMarkers })
        //    this.props.updatePlaces(newPlaces)
        } else {
            this.setState({filteredVenues: this.props.venues})
            this.state.markers.forEach(marker => marker.setVisible(true))

        }
    }

    triggerMarkerClick = (venueId) => {
        this.props.markers.map((marker) => {
            if(marker.id === venueId) {
                window.google.maps.event.trigger(marker, 'click');
            }

        })
    }

/*showVenues = () => {
    <ul>
     {this.state.venues.map((myVenue) => {
            <li role="menuitem"
             onClick={() => this.triggerMarkerClick(myVenue.venue.id)}
              aria-label={myVenue.venue.name}
              tabIndex="0"
              id={myVenue.venue.id}
              key={myVenue.venue.id}
            >
              <br/>
              <b>{myVenue.venue.name}</b>
              <br/> 
              <i>{myVenue.venue.location.address}</i>
            </li> 
        }
          )}
     </ul> 
}
   */
    render() {
        return (
            <aside>





        <div id="SearchBar" aria-label="Search Bar">
          <SearchBar
            venues={ this.state.filteredVenues } 
            tmarkers={ this.state.markers } 
            filteredVenues={ this.filteredVenues }
            query={this.state.query}
            clearQuery={this.clearQuery}            
            updateQuery={b => this.updateQuery(b)}
            clickLocation={this.clickLocation}
          />                       
                       

   
          </div>



            <div>

<ul>
     {this.state.venues.map((myVenue) => {
            <li role="menuitem"
             onClick={() => this.triggerMarkerClick(myVenue.venue.id)}
              aria-label={myVenue.venue.name}
              tabIndex="0"
              id={myVenue.venue.id}
              key={myVenue.venue.id}
            >
              <br/>
              <b>{myVenue.venue.name}</b>
              <br/> 
              <i>{myVenue.venue.location.address}</i>
            </li> 
        }
          )}
     </ul> 
                
    </div>        
        
            

                
            </aside>

        )
    }
}

export default Menu
