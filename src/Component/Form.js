import React,{Component} from "react";
import './style.css'


class Form extends Component {          
  
  constructor() {
    super();
    this.state = {
      name: "",
      department:"",
      rating:null,
      details: [],
    };
  }

  manageChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });   
  };
  manageSubmission = (e) => {     
    e.preventDefault();
    const temobj = {        
      name: this.state.name,
      department:this.state.department,
      rating:this.state.rating
    };
   
    const tempArr = this.state.details;
    tempArr.push(temobj);
    this.setState({ details: tempArr });
  };
  render() {
    return (
      <div>
        <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
        <form>
          <label className="text1">Name:
          <input className="box1"
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) => this.manageChange(e)}
          /></label>
          <label className="text2">Department:
          <input className="box1"
            type="text"
            name="department"
            id="department"
            value={this.state.department}
            onChange={(e) => this.manageChange(e)}
          /></label>
          <label className="text3">Rating:
          <input className="box1"
            type="number"
            name="rating"
            id="rating"
            value={this.state.rating}
            onChange={(e) => this.manageChange(e)}
          />
         </label>
          <input className="box2" type="submit" onClick={(e) => this.manageSubmission(e)} />
        </form>
        <div className="box4">
        {this.state.details.map((user) => (
          <p className="text4">
            Name:{user.name}  Department:{user.department} Rating:{user.rating}
          </p>
          
        ))}
        </div>
      </div>
    );
  }
}

export default Form;
