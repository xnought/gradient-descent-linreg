import React, { Component } from "react";
import * as d3 from "d3";
class HistoryLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 200,
			height: 175,
			shift: 0,
		};
	}
	componentDidMount() {
		//const { width, height } = this.state;
		//const svg = d3.select("#diff");
		//function line(m, x, b) {
		//return m * x + b;
		//}
		//const { m, b } = this.props;
		//let y1 = line(m, 0, b);
		//let y2 = line(m, width, b);
		//svg.append("line")
		//.attr("x1", 0)
		//.attr("y1", height - y1)
		//.attr("x2", width)
		//.attr("y2", height - y2)
		//.attr("stroke", "black");
	}
	componentDidUpdate() {
		const { width, height, shift } = this.state;
		const { m, b, rsquared, data, darkness } = this.props;
		const svg = d3.select("#diff");
		if (isFinite(m) && isFinite(b)) {
			function line(m, x, b) {
				return m * x + b;
			}
			let thresholds = d3
				.range(darkness, 20, 1)
				.map((i) => Math.pow(2, i));
			let color = d3.scaleSequentialLog(
				d3.extent(thresholds),
				d3.interpolateMagma
			);
			const max = d3.max(data.y);
			let lengthy = data.y.length;
			let lengthx = data.X.length;
			let y1 = (line(m, data.X[0], b) / max) * (height - shift);
			let y2 = (line(m, data.X[lengthx - 1], b) / max) * (height - shift);

			svg.append("line")
				.attr("x1", 0)
				.attr("y1", height - y1)
				.attr("x2", width)
				.attr("y2", height - y2)
				.style("stroke", color(rsquared));
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
