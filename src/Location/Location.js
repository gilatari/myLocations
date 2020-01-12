import React from 'react';

export default class Location extends React.Component{

  constructor(props) {
    super(props);
      this.name = this.props.name;
      this.address = this.props.address;
      this.coordinates = this.props.coordinates;
      this.category = this.props.category;


    // this.state = {name:null, 
    //               address:null, 
    //               coordinates:null, 
    //               category:this.category
    //             }
  }
}

