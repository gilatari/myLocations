import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component{

  selectAction = (e, action)=>{
    this.props.selectAction(action);
  }

render() {
    return (
      <div className="navbar">
        {(this.props.location)?
        <div>
          <div className="selectedLocation">{this.props.location.name}</div>
          <div className="navbar-actions">
             <div onClick={(e) => this.selectAction(e, 'new')} className="nav-action">New</div>
             <div onClick={(e) => this.selectAction(e, 'read')} className="nav-action">Read</div>
             <div onClick={(e) => this.selectAction(e, 'update')} className="nav-action">Edit</div>
             <div className="nav-action" onClick={this.props.deleteLocation}>Delete</div>
          </div>
        </div>
         : 
        <div className="navbar-actions">
            <div onClick={(e) => this.selectAction(e, 'new')} className="nav-action">New</div>
        </div>
      }
      </div>
    );
  }
}

