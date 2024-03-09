import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/providers/Theme";
import "../src/index.css";
import {CssBaseline} from "@mui/material";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		layout: "fullscreen",
	},
	decorators: [
		(Story, ctx) => (
			<div
				style={{
					display: "block",
					padding: "1rem",
					width: "100%",
					height: "100%",
					overflow: "scroll",
					background: `
            linear-gradient(45deg, lightgray 25%, transparent 25%, transparent 75%, lightgray 75%),
            linear-gradient(45deg, lightgray 25%, transparent 25%, transparent 75%, lightgray 75%)
          `,
					backgroundColor: "white",
					backgroundSize: "20px 20px",
					backgroundPosition: "0 0, 10px 10px",
				}}
			>
				<ThemeProvider scheme={ctx.globals.backgrounds?.value === '#333333' ? 'dark' : 'light'}>
					<CssBaseline />
					<Story />
				</ThemeProvider>
			</div>
		),
	],
};

export default preview;
