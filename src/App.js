import React, { Component } from "react";
import PropTypes from "prop-types";
import TitleBar from "./components/TitleBar";
import ScatterPlot from "./components/ScatterPlot";
import HistoryLine from "./components/HistoryLine";
import ContourLoss from "./components/ContourLoss";
import Data from "./ml/data";
import {
	Fab,
	Slider,
	IconButton,
	Box,
	withStyles,
	Card,
	CardContent,
	CardActions,
	Typography,
	CircularProgress,
	FormControl,
	MenuItem,
	InputLabel,
	Select,
	Button,
} from "@material-ui/core";
import { PlayArrow, Stop, Replay } from "@material-ui/icons";
import * as tf from "@tensorflow/tfjs";

const styles = (theme) => ({
	root: {
		minWidth: 500,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			darkness: -8,
			playButton: true,
			linreg: {
				meanSquaredError: 0,
				rsquared: null,
				tensorData: {
					X: tf.tensor([]),
					y: tf.tensor([]),
				},
				data: {
					X: [],
					y: [],
				},
				hyperparams: {
					learningRate: 0.03,
					epochs: 0,
					loss: null,
					speed: 200,
				},
				tunableparams: {
					m: 0,
					b: 0,
				},
			},
		};
		this.generateData = this.generateData.bind(this);
		this.linearRegression = this.linearRegression.bind(this);
		this.a = this.a.bind(this);
		this.handleSlider = this.handleSlider.bind(this);
		this.reset = this.reset.bind(this);
	}

	reset() {
		this.setState({
			...this.state,
			playButton: true,
			linreg: {
				...this.state.linreg,
				rsquared: null,
				hyperparams: {
					...this.state.linreg.hyperparams,
					epochs: 0,
					loss: null,
				},
				tunableparams: {
					m: 0,
					b: 0,
				},
			},
		});
	}
	generateData() {
		//function getRandomInt(max) {
		//return Math.floor(Math.random() * Math.floor(max));
		//}
		let generate = new Data(0, 5, 1);
		generate.random_linear_data(3);
		const { X, y } = generate.output;
		const XTensor = tf.tensor(X);
		let yTensor = tf.tensor(y);
		const mean = tf.mean(yTensor).dataSync()[0];
		const meanSquaredError =
			(1 / (X.length * 2)) *
			tf.sum(tf.pow(tf.sub(mean, yTensor), 2)).dataSync()[0];
		this.setState({
			linreg: {
				...this.state.linreg,
				meanSquaredError,
				tensorData: { X: XTensor, y: yTensor },
				data: { X, y },
			},
		});
	}

	linearRegression() {
		//hypothesis function
		let { m, b } = this.state.linreg.tunableparams;
		let { learningRate } = this.state.linreg.hyperparams;
		const { X, y } = this.state.linreg.tensorData;
		let yPred = h(X, m, b);
		let len = X.shape[0];
		function h(X, m, b) {
			return tf.add(tf.mul(X, m), b);
		}
		//Define the loss function
		function loss(y, y_pred) {
			return (
				(1 / (2 * len)) *
				tf.sum(tf.pow(tf.sub(y_pred, y), 2)).dataSync()[0]
			);
		}

		//then compute the gradient
		let dlossdm =
			(1 / len) * tf.sum(tf.mul(tf.sub(yPred, y), X)).dataSync()[0];
		let dlossdb = (1 / len) * tf.sum(tf.sub(yPred, y)).dataSync()[0];
		let lossValue = loss(y, yPred);

		//gradient descent by updating the m and b
		m += -learningRate * dlossdm;
		b += -learningRate * dlossdb;
		let rsquared = 1 - lossValue / this.state.linreg.meanSquaredError;
		let epochs = this.state.linreg.hyperparams.epochs + 1;
		this.setState({
			linreg: {
				...this.state.linreg,
				rsquared,
				tunableparams: { m, b },
				hyperparams: {
					...this.state.linreg.hyperparams,
					epochs: epochs,
					loss: lossValue,
				},
			},
		});
	}
	async a() {
		const timer = (ms) => new Promise((res) => setTimeout(res, ms));
		const upperBounds = 200;
		while (true) {
			const { speed } = this.state.linreg.hyperparams;
			const changeSpeed = upperBounds - speed;
			await this.linearRegression();
			//await this.forceUpdate();
			await timer(changeSpeed);
			if (this.state.playButton === true) {
				break;
			}
		}
	}
	handleSlider(event, value) {
		this.setState({
			linreg: {
				...this.state.linreg,
				hyperparams: {
					...this.state.linreg.hyperparams,
					speed: value,
				},
			},
		});
	}
	handleClick(event) {
		this.setState({ anchorEl: event.currentTarget });
	}

	async componentDidMount() {
		await this.generateData();
		//document.body.style.zoom = "90%";
	}

	render() {
		const { m, b } = this.state.linreg.tunableparams;
		const {
			loss,
			speed,
			epochs,
			learningRate,
		} = this.state.linreg.hyperparams;
		const { rsquared, data } = this.state.linreg;
		const marginButtons = 3;
		const { classes } = this.props;
		const nullColor = (val) => (val === null ? "#dce0dd" : "black");
		const nullNumber = (num, precision) =>
			num === null ? num : num.toPrecision(precision);
		return (
			<div>
				<TitleBar />
				<Box display="flex" justifyContent="center" marginTop={2}>
					<Box marginRight={10}>
						<ScatterPlot
							data={data}
							m={m}
							b={b}
							ms={speed}
							rsquared={loss === null ? 0 : loss}
							darkness={this.state.darkness}
						/>
					</Box>
					<Box>
						<Box display="flex">
							<Card className={classes.root}>
								<Box display="flex">
									<Box marginLeft={5} marginRight={5}>
										<HistoryLine
											data={data}
											m={m}
											b={b}
											ms={speed}
											rsquared={loss === null ? 0 : loss}
											darkness={this.state.darkness}
										/>
									</Box>
									<Box>
										<CardContent>
											<Typography
												variant="h3"
												component="h2"
											>
												epoch: {epochs}
											</Typography>

											<Typography
												variant="h6"
												component="h2"
												style={{
													color: nullColor(loss),
												}}
											>
												{`loss = ${nullNumber(
													loss,
													10
												)}`}
											</Typography>
											<Typography
												variant="h6"
												component="h2"
												style={{
													color: nullColor(rsquared),
												}}
											>
												{` r^2 = ${nullNumber(
													rsquared,
													10
												)}`}
											</Typography>
											<Typography
												variant="h6"
												component="h2"
												style={{
													color:
														(m && b) === 0
															? "#dce0dd"
															: "black",
												}}
											>
												{(m && b) === 0
													? `f(x) = mx + b`
													: `f(x) = ${m.toPrecision(
															3
													  )}x + ${b.toPrecision(
															3
													  )}`}
											</Typography>
										</CardContent>
									</Box>
								</Box>
								<CardActions>
									<Box display="flex">
										<Box
											display="flex"
											margin={marginButtons}
										>
											<IconButton onClick={this.reset}>
												<Replay />
											</IconButton>
										</Box>
										<Box
											display="flex"
											margin={marginButtons}
										>
											<Fab
												onClick={() => {
													this.setState({
														playButton: !this.state
															.playButton,
													});
													this.a();
												}}
												style={{
													background: this.state
														.playButton
														? "#4caf50"
														: "#f44336",
													color: "#FFFFFF",
												}}
											>
												{this.state.playButton ? (
													<PlayArrow />
												) : (
													<Stop />
												)}
											</Fab>
										</Box>
										<Box
											display="flex"
											margin={marginButtons}
											minWidth={200}
										>
											<CircularProgress
												style={{
													color: "#fdd835",
												}}
												value={speed / 2}
												variant="determinate"
											></CircularProgress>
											<Typography
												variant="caption"
												style={{
													color: "#fdd835",
												}}
											>
												speed
											</Typography>
											<Slider
												style={{
													marginTop: 15,
													color: "#fdd835",
												}}
												value={speed}
												min={0}
												max={200}
												onChange={this.handleSlider}
											/>
										</Box>
										<Box>
											<FormControl
												className={classes.formControl}
											>
												<InputLabel
													style={{ color: "#606060" }}
												>
													learning rate
												</InputLabel>
												<Select
													style={{
														color: "#606060",
													}}
													color="secondary"
													value={learningRate}
													onChange={(event) => {
														this.setState({
															linreg: {
																...this.state
																	.linreg,
																hyperparams: {
																	...this
																		.state
																		.linreg
																		.hyperparams,
																	learningRate:
																		event
																			.target
																			.value,
																},
															},
														});
													}}
												>
													<MenuItem value={1.0}>
														1.0
													</MenuItem>
													<MenuItem value={0.1}>
														0.1
													</MenuItem>
													<MenuItem value={0.03}>
														0.03
													</MenuItem>
													<MenuItem value={0.01}>
														0.01
													</MenuItem>
													<MenuItem value={0.001}>
														0.001
													</MenuItem>
													<MenuItem value={0.0001}>
														0.0001
													</MenuItem>
													<MenuItem value={0.00001}>
														0.00001
													</MenuItem>
												</Select>
											</FormControl>
										</Box>
									</Box>
								</CardActions>
							</Card>
						</Box>
						<ContourLoss
							ms={speed}
							data={data}
							m={isFinite(m) ? m : 0}
							b={isFinite(b) ? b : 0}
							loss={loss}
							darkness={this.state.darkness}
						/>
						<Button
							onClick={() => {
								window.location.reload();
							}}
							variant="outlined"
							color="primary"
						>
							New Data
						</Button>

						<Typography variant="h6" component="h4">
							x: {data.X.toString()}
						</Typography>
						<Typography variant="h6" component="h4">
							y: {data.y.toString()}
						</Typography>
					</Box>
				</Box>
			</div>
		);
	}
}
App.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
