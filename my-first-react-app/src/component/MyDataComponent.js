import React, {Component} from 'react';
import axios from 'axios';

class MyDataComponent extends Component{
	state = {
			count:1,
			elements: []
	};
	componentDidMount(){
		console.log("whaaat");
		this.retrieveData();
	};
	retrieveData(){

		axios.get('https://jsonplaceholder.typicode.com/todos/'+this.state.count).then((result)=>{
			console.log(result.data);
			let currEl= [...this.state.elements];
			currEl.push(result.data);
			this.setState({count: this.state.count+1, elements: currEl});
		});
	}
	render(){
		let myTableData = this.state.elements.map((element,e1Index)=>{
			return <tr key={e1Index}>
					<td>{element.id}</td>
					<td>{element.title}</td>
					</tr>;
		});
		
		let myTable=<table border="1">
		<thead>
		<tr>
			<th>ID</th>
			<th>TITLE</th>
			</tr>
		</thead>
		<tbody>{myTableData}</tbody></table>;
		return <div>data component here
		<br/>
		<button onClick={()=> this.retrieveData()}>retrieve</button>
		<br/>
		{myTable}</div>
	}
}

export default MyDataComponent