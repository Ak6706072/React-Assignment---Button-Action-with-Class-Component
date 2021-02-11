import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			para : false,
		}
		this.renderPara = this.renderPara.bind(this);
		this.toogle = this.toogle.bind(this);
	};
	toogle(){
		this.setState({
			para:true,
		})
	}
	renderPara(){
		if(!this.state.para){
			return <button id="click" onClick={this.toogle}>Click</button>
		}else{
			return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
		}
	}
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				{
					this.renderPara()
				}
				{/* this.state.para === true ? <p id= "para">dhf</p>: <button onClick={this.handleClick}>click</button>  */}
    		</div>
    	);
    }
}


export default App;

