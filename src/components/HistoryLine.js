import React, { Component } from "react";
import * as d3 from "d3";
class HistoryLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 1000,
			height: 1000,
		};
	}
	componentDidMount() {
		const { width, height } = this.state;
		const svg = d3.select("#diff");
		function line(m, x, b) {
			return m * x + b;
		}
		const { m, b } = this.props;
		let y1 = line(m, 0, b);
		let y2 = line(m, width, b);
		svg.append("line")
			.attr("x1", 0)
			.attr("y1", height - y1)
			.attr("x2", width)
			.attr("y2", height - y2)
			.attr("stroke", "black");
	}
	componentDidUpdate() {
		const { width, height } = this.state;
		const { m, b, rsquared, data } = this.props;
		const svg = d3.select("#diff");
		if (isFinite(m) && isFinite(b)) {
			function line(m, x, b) {
				return m * x + b;
			}
			let lengthy = data.y.length;
			let lengthx = data.X.length;
			let y1 = (line(m, data.X[0], b) / lengthy) * height;
			let y2 = (line(m, data.X[lengthx - 1], b) / lengthy) * height;
			svg.append("line")
				.attr("x1", (data.X[0] / lengthx) * width)
				.attr("y1", height - y1)
				.attr("x2", (data.X[lengthx - 1] / lengthx) * width)
				.attr("y2", height - y2)
				.attr("stroke", d3.interpolateSpectral(rsquared.dataSync()[0]));
			if (m === 0 && b === 0) {
				svg.selectAll("line").remove();
			}
		} else {
			svg.selectAll("line").remove();
		}
	}
	render() {
		const { width, height } = this.state;
		return <svg style={{ width, height }} id="diff"></svg>;
	}
}

export default HistoryLine;
