import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/APIs.css";
import "@/styles/fontawesome.css";
import "@/styles/keyframes.css";
import { Header } from "@/components/Headers/Header";
import { Contents } from "@/components/Contents/Contents";
import { LeftSide } from "@/components/LeftSide/LeftSide";
import Script from "next/script";
import { RightSide } from "@/components/RightSide/RightSide";

const inter = Inter({ subsets: ["latin"] });

declare global {
	interface Window {
		kakao: any;
	}
}

export const metadata: Metadata = {
	title: "AllDeom",
	description: "내가 만듬",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head></head>
			<body className={inter.className} suppressHydrationWarning={true}>
				<Script
					type="text/javascript"
					src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC__KAKAO_MAP_TOKEN}&autoload=false&libraries=services`}
					strategy="beforeInteractive"
				></Script>
				<main className="grid grid-cols-gridWrapperTemplate grid-rows-gridWrapperTemplate gap-3  h-full overflow-y-scroll bg-utilColors-background_10">
					{/* <Header /> */}
					<LeftSide />
					<Contents>{children}</Contents>
					<RightSide></RightSide>
				</main>
			</body>
		</html>
	);
}
