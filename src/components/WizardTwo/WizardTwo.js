import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {updateCity} from "../../ducks/reducer";

class WizardTwo extends Component {
    render(){
        return(
            <div className="parent-div">
            {console.log(this.props)}
                <div className="vert-align">
            
                <p>In what city will the property be located?</p><br />
                    
                        <input placeholder="city name" type="text" onChange={(e)=>this.props.updateCity(e.target.value)}/>
                
                    <Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        city: state.city                //this is where we can additional state properties, if not add, console log will only show city in this case
    }
}

export default connect(mapStateToProps,{updateCity: updateCity})(WizardTwo);