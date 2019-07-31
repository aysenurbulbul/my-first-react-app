import React, {Component} from 'react';
import './MyComponent.css';

class MyComponent extends Component{
	componentDidMount(){
		console.log("yes");
	}
	divStyle = {
		fontSize: "7px"	
	};
	
	state = {
			count: 5
	};
	
	increaseCount=()=> {
		console.log("done");
		this.setState({count: this.state.count+1});
	};
	render(){
		let myVar="newbie";
		return <div className="MyClass" style={{fontSize:this.state.count + "px"}}>new component xd hallo {this.props.name} and 
		<br/>
		hallo {myVar}
		<br/>
		and {this.props.children}
		<br/>
		  and the count is {this.state.count}
		  <br/>
		  	<button onClick={()=> this.increaseCount()}>increase count</button>
		</div>;
	}
}

export default MyComponent