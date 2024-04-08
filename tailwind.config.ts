import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",

	theme: {
		extend: {
			colors: {
				primary: {
					purple: "#352762",
					lightPurple: "#A08BE6",
				},
				utilColors: {
					background_10: "#141414",
					background_9: "#191919",
					background_8: "#252525",
					background_7: "#191919",
					background_6: "#191919",
					background_5: "#191919",
					background_4: "#191919",
					text: "#bcbcbc",
					shadow: "#ffffff09",
					border: "#202020",
				},
			},

			gridTemplateColumns: {
				gridWrapperTemplate: "96px 1450px 1fr",
				tableListGrid: "repeat(auto-fill,minmax(360px,auto))",
				tableInfoGrid: "repeat(4,1fr)",
				postTitleGrid: "66px auto 100px 100px 60px",
			},
			gridTemplateRows: {
				gridWrapperTemplate: "10px auto",
				tableInfoGrid: "repeat(6,1fr)",
			},
			gridAutoRows: {
				tableListGrid: "minmax(200px,auto)",
			},
			boxShadow: {
				defaultBox_10: "0px 0px 10px 0px #0000",
				defaultBox_20: "0px 0px 20px 0px #0000",
				defaultBox_30: "0px 0px 30px 0px #0000",
				defaultBox_40: "0px 0px 40px 0px #0000",
				defaultBox_50: "0px 0px 50px 0px #0000",
				defaultBox_60: "0px 0px 60px 0px #0000",
				defaultBox_70: "0px 0px 70px 0px #0000",
				defaultBox_80: "0px 0px 80px 0px #0000",
				defaultBox_90: "0px 0px 90px 0px #0000",
				defaultBox_100: "0px 0px 100px 0px #0000",
			},
		},
	},
	plugins: [],
};

export default config;
