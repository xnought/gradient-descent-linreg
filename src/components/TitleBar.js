import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function TitleBar() {
	return (
		<div>
			<AppBar color="secondary" position="static">
				<Toolbar>
					<Typography variant="h6">
						Linear Regression Playground
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
