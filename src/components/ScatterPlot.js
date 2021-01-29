import React, { Component } from "react";
// legends for linear scales
import * as d3 from "d3";
class ScatterPlot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 800,
			height: 800,
			shift: 0,
		};
	}

	async componentDidMount() {
		const { width, height, shift } = this.state;
		const svg = d3.select("#working");
		function line(m, x, b) {
			return m * x + b;
		}
		const { m, b } = await this.props;
		let data = await this.props.data;
		let y1 = line(m, 0, b);
		let y2 = line(m, width, b);
		const max = d3.max(data.y);
		let dataSet = [];
		for (let i = 0; i < data.X.length; i++) {
			await dataSet.push({
				x: (data.X[i] / (data.X.length - 1)) * width,
				y: (data.y[i] / max) * (height - shift),
			});
		}
		console.log(dataSet);
		console.log(data.y);
		//hthis.setState({ dataSet });
		await svg
			.selectAll("circle")
			.data(dataSet)
			.enter()
			.append("circle")
			.attr("cx", (d) => d.x)
			.attr("cy", (d) => height - d.y)
			.attr("r", 5)
			.style("fill", "#F50257");

		await svg
			.append("line")
			.attr("x1", 0)
			.attr("y1", height - y1)
			.attr("x2", width)
			.attr("y2", height - y2)
			.attr("stroke", "black");
	}
	async componentDidUpdate() {
		const { width, height, shift } = this.state;
		const svg = d3.select("#working");
		function line(m, x, b) {
			return m * x + b;
		}
		const { m, b, ms, data, rsquared, darkness } = this.props;
		let thresholds = d3.range(darkness, 20, 1).map((i) => Math.pow(2, i));
		let color = d3.scaleSequentialLog(
			d3.extent(thresholds),
			d3.interpolateMagma
		);

		if (isFinite(m) && isFinite(b)) {
			const max = d3.max(data.y);
			let lengthy = data.y.length;
			let lengthx = data.X.length;
			let y1 = (line(m, data.X[0], b) / max) * (height - shift);
			let y2 = (line(m, data.X[lengthx - 1], b) / max) * (height - shift);

			svg.select("line")
				.transition()
				.duration(200 - ms)
				.attr("x1", 0)
				.attr("y1", height - y1)
				.attr("x2", width)
				.attr("y2", height - y2)
				.style("stroke", color(rsquared));
		}
	}
	render() {
		const { width, height } = this.state;
		return <svg style={{ width, height }} id="working"></svg>;
	}
}

export default ScatterPlot;
