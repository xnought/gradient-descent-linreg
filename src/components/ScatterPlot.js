import React, { Component } from "react";
// legends for linear scales
import * as d3 from "d3";
class ScatterPlot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 1000,
			height: 1000,
		};
	}

	async componentDidMount() {
		const { width, height } = this.state;
		const svg = d3.select("#working");
		function line(m, x, b) {
			return m * x + b;
		}
		const { m, b } = await this.props;
		let data = await this.props.data;
		let y1 = line(m, 0, b);
		let y2 = line(m, width, b);
		let dataSet = [];
		for (let i = 0; i < data.X.length; i++) {
			await dataSet.push({
				x: (data.X[i] / data.X.length) * width,
				y: (data.y[i] / data.y.length) * height,
			});
		}
		//hthis.setState({ dataSet });
		await svg
			.selectAll("circle")
			.data(dataSet)
			.enter()
			.append("circle")
			.attr("cx", (d) => 5 + d.x)
			.attr("cy", (d) => height - 5 - d.y)
			.attr("r", 3.5);

		await svg
			.append("line")
			.attr("x1", 0)
			.attr("y1", height - y1)
			.attr("x2", width)
			.attr("y2", height - y2)
			.attr("stroke", "black");
	}
	async componentDidUpdate() {
		const { width, height } = this.state;
		const svg = d3.select("#working");
		function line(m, x, b) {
			return m * x + b;
		}
		const { m, b, ms, data } = this.props;

		if (isFinite(m) && isFinite(b)) {
			let lengthy = data.y.length;
			let lengthx = data.X.length;
			let y1 = (line(m, data.X[0], b) / lengthy) * height;
			let y2 = (line(m, data.X[lengthx - 1], b) / lengthy) * height;

			svg.select("line")
				.transition()
				.duration(200 - ms)
				.attr("x1", (data.X[0] / lengthx) * width)
				.attr("y1", height - y1)
				.attr("x2", (data.X[lengthx - 1] / lengthx) * width)
				.attr("y2", height - y2);
		}
	}
	render() {
		const { width, height } = this.state;
		return <svg style={{ width, height }} id="working"></svg>;
	}
}

export default ScatterPlot;
