import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
var summa=0;

 class New_component1 extends React.Component {

   constructor(props) {
     super(props);
     this.add_one = this.add_one.bind(this)
   }

	random(min, max) {
	   let r = Math.random();
	   return Math.floor(r * (max - min) + min);
	}

	add_one() {
     summa+=1;
	   this.props.onClick(summa);
	}

  render() {

  	var style = {
      position: 'absolute',
      left: this.random(10, 70) + '%',
      top: this.random(10, 70) + '%',
      cursor: 'pointer',
      color:'red'

 	 };

    return (
      <div>
          <div onClick={this.add_one} className = "imgButton" style={style}> </div>
      </div>
    );
  }
}
export default New_component1;
