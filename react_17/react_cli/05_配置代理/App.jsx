import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

	// 获取学生信息
	getStudentData = () => {
		axios.get("http://localhost:3000/api1/students").then(res => {
			console.log('成功了', res.data);
		}, error => {
			console.log('失败了', error);
		})
	}

	// 获取汽车信息
	getCarData = () => {
		axios.get("http://localhost:3000/api2/cars").then(res => {
			console.log('成功了', res.data);
		}, error => {
			console.log('失败了', error);
		})
	}
	
	render() {
		return (
			<div>
				<button onClick={this.getStudentData}>点我获取学生数据</button>
				<button onClick={this.getCarData}>点我获汽车数据</button>
			</div>
		)
	}
}
