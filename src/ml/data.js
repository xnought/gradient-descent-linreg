import tf from "@tensorflow/tfjs";

class Data {
	constructor(start, end, step) {
		this.start = start;
		this.end = end;
		this.step = step;
	}
	tensor_to_array(tensor) {
		return Array.from(tensor.dataSync());
	}
	output(X, y) {
		this.size = X.length;
		this.output = { X, y };
	}
	exact_linear_data() {
		const data = this.tensor_to_array(
			tf.range(this.start, this.end, this.step)
		);
		this.output(data, data);
	}
	random_linear_data(deviation) {
		const X = this.tensor_to_array(
			tf.range(this.start, this.end, this.step)
		);
		//Now we want to add a random number to each linear point
		const y = this.tensor_to_array(
			tf.add(
				X,
				tf.randomUniform(
					[this.end - this.start],
					0,
					this.end / deviation
				)
			)
		);
		this.output(X, y);
	}
}

module.exports = Data;
