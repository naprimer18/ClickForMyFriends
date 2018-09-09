import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import CreateGame from './CreateGame.js'

export default class App extends React.Component {
  render () {
    	return (
     	   <div>
       	  <CreateGame />
		  	 </div>
    				);
  	}
	}

ReactDOM.render(<App />, document.getElementById('root'))
