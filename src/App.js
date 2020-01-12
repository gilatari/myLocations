import React from 'react';
import './App.css';
import Location from './Location/Location'
import Category from './Category/Category'

import Navbar from './Navbar/Navbar'
import ReadLocation from './Location/Crud/Read/ReadLocation';
import CreateLocation from './Location/Crud/Create/CreateLocation';
import UpdateLocation from './Location/Crud/Update/UpdateLocation';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    //mock arrays
    this.categories = [new Category('Software'), new Category('Hardware') ];
    this.locations = [new Location({name: 'Microsoft Reactor',
                                    address: 'Dubnov St 7, Tel Aviv-Yafo', 
                                    coordinates: '32.0750512:34.7131201', 
                                    category: this.categories[1]}),
                      new Location({name: 'Intel',
                                    address: 'DuHa-Marpe St 10, Jerusalem', 
                                    coordinates: '31.8018424:35.2017174', 
                                    category: this.categories[0]})
                                  ];
                                  
    this.state = {locations: this.locations, 
                  selectedLocation: '0', 
                  categories: this.categories,
                  action: 'read'};
  }

  changeLocation = (selectedLocation)=>{
      this.setState({selectedLocation:selectedLocation});
  }

  createLocation = (newLocation)=>{
    var tempLocationList =  this.state.locations;
    tempLocationList.push(newLocation);
    this.setState({locations: tempLocationList});
  }

  updateLocation = (locationData)=>{
    var tempLocationList = this.state.locations;
    tempLocationList[this.state.selectedLocation] = locationData;
    this.setState({locations: tempLocationList});
  }

  deleteLocation = ()=>{
    var tempLocationList = this.state.locations;
    tempLocationList.splice(this.state.selectedLocation, 1)
    this.setState({locations: tempLocationList});
  }

  selectAction = (action)=>{
    this.setState({action:action});
  }
  
render() {

  const actions = ()=> {
    switch(this.state.action){
        case 'new': return <CreateLocation createLocation={this.createLocation} 
                                           categories={this.state.categories} />;

        case 'update': return <UpdateLocation location ={this.state.locations[this.state.selectedLocation]} 
                                              categories={this.state.categories}
                                              updateLocation = {this.updateLocation} />;

        default: return <ReadLocation locations={this.state.locations} 
                                          selectedLocation={this.state.selectedLocation}
                                          changeLocation ={this.changeLocation} />;
      }      
    }
  
    return (
      <div className="app">
        <header className="app-header">
            <Navbar location ={this.state.locations[this.state.selectedLocation]} 
                    deleteLocation = {this.deleteLocation}
                    selectAction = {this.selectAction}
              />
        </header>
        <div className="content">
          {actions()}
        </div>
      </div>
    );
  }
}

