import React from 'react';
import './UpdateLocation.css';

export default class UpdateLocation extends React.Component{

  constructor(props) {
    super(props);

    this.state = {name:props.location.name,
                  address:props.location.address,
                  coordinates:props.location.coordinates,
                  selectCategory:props.location.selectCategory 
                };   
  }

  updateLocation = ()=>{
    this.props.updateLocation(this.state)
  }
  
  onTyping = (event,fieldName)=>{
    this.setState({[fieldName]:event.target.value})
  }

  onSelectCategory = (e)=>{
    this.setState({selectCategory:e.target.value});
   }
  
render() {
    return (
      <div className="update-location">
        {(this.props.categories)?
          <div>  
            <h5>Update Location</h5>
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
            <button onClick={this.updateLocation}>Update Location</button>
          </div>
        :null}
      </div>
    );
  }
}

