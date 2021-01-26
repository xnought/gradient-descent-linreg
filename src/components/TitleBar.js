import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

export default function TitleBar() {
	return (
		<div>
			<AppBar color="secondary" position="static">
				<Toolbar>
					<Typography variant="h6">
						Linear Regression Playground
					</Typography>
					<IconButton
						href="https://github.com/xnought/vectorv"
						edge="end"
						color="white"
						aria-label="menu"
					>
						<GitHub />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
