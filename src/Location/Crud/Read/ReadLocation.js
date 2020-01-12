import React from 'react';

export default class ReadLocation extends React.Component{

  onSelectLocation = (e)=>{
   this.props.changeLocation(e.target.value);
  }
  
render() {
    return (
      <div className="read-location">
        {(this.props.locations)?
          <div>  
            <h5>Read Location</h5>
            <select onChange={(e)=>this.onSelectLocation(e)} >
              {this.props.locations.map((location, key) =>
                  <option value={key} key={key} > 
                      {location.name}
                  </option>
              )};
            </select>
          </div> :null
        }
      </div>
    );
  }
}

