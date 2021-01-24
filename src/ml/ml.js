import tf from "@tensorflow/tfjs";
const Data = require("./data");

let data = new Data(0, 10, 1);
data.exact_linear_data();

//First we want to create the data
let X = tf.tensor(data.output.X);
let y = tf.tensor(data.output.y);

//Create the tunable parameters
const length = data.output.size;
let m = 0;
let b = 0;

//Lets create the hyperparameters for the optimization
const learning_rate = 0.001;
const max_epochs = 10000;
let current_epoch = 0;

//Define the hypothesis function
function h(X) {
	return tf.add(tf.mul(X, m), b);
}
//Define the loss function
function loss(y, y_pred) {
	return tf.sum(tf.pow(tf.sub(y_pred, y), 2)).dataSync()[0];
}
function to_scalar(tensor) {
	return Array.from(tensor.dataSync())[0];
}

function loss_threshold(loss, max_epochs, current_epoch, min_loss) {
	return loss > min_loss && current_epoch < max_epochs;
}
const min_loss = 1e-10;
let play = true;
while (play) {
	//first compute y_pred
	let y_pred = h(X);

	//then compute the gradient
	let dloss_dm = tf.sum(tf.mul(tf.sub(y_pred, y), X)).dataSync()[0];
	let dloss_db = tf.sum(tf.sub(y_pred, y)).dataSync()[0];
	let loss_value = loss(y, y_pred);
	console.log(
		`Epoch: ${current_epoch}, loss: ${loss_value}, m: ${m}, b: ${b}`
	);

	//gradient descent by updating the m and b
	m += -learning_rate * dloss_dm;
	b += -learning_rate * dloss_db;

	//increment epochs
	current_epoch++;
	play = loss_threshold(loss_value, max_epochs, current_epoch, min_loss);
}
