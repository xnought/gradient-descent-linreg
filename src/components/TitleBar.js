import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function TitleBar() {
	return (
		<div>
			<AppBar color="secondary" position="static">
				<Toolbar>
					<Typography variant="h6">
						Linear Regression with Gradient Descent Visualizer
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
