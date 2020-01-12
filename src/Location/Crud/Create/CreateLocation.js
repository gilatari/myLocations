import React from 'react';
import './CreateLocation.css';
import Location from '../../Location';

export default class CreateLocation extends React.Component{

  constructor(props) {
    super(props);
    this.state = {name:'', 
                  address:'', 
                  coordinates:'', 
                  selectCategory:'0' 
    };   
  }

  createLocation = ()=>{
    this.props.createLocation(new Location({
        name:this.state.name, 
        address:this.state.address,
        coordinates:this.state.coordinates,
        category:this.state.selectCategory
    }));
  }

  onTyping = (event,fieldName)=>{
    this.setState({[fieldName]:event.target.value})
  }

  onSelectCategory = (e)=>{
    this.setState({selectCategory:e.target.value});
   }
  
render() {
    return (
      <div className="create-location">
        {(this.props.categories)?
          <div>  
            <h5>Create Location</h5>
            <div className="fields">
                <input placeholder="Name" value={this.state.name} onChange={(e)=>{this.onTyping(e,'name')}} />
                <input placeholder="Address" value={this.state.address} onChange={(e)=>{this.onTyping(e,'address')}}/>
                <input placeholder="Coordinates" value={this.state.coordinates} onChange={(e)=>{this.onTyping(e,'coordinates')}}/>
                <select onChange={(e)=>this.onSelectCategory(e)} >
                  {this.props.categories.map((category, key) =>
                      <option value={key} key={key} > 
                          {category.props}
                      </option>
                  )};
                </select>
            </div>
            <button onClick={this.createLocation}>Create Location</button>
        </div>:null }
      </div>
    );
  }
}

