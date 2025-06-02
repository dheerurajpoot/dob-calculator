import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "DateCalc - Free Date Difference & Age Calculator Tools",
		template: "%s | DateCalc",
	},
	description:
		"Calculate the exact difference between dates or your precise age with our free, easy-to-use date calculator tools. Get instant results in years, months, days, and total days.",
	keywords: [
		"date calculator",
		"date difference calculator",
		"age calculator",
		"dob calculator",
		"time between dates",
		"calculate age",
		"date difference tool",
		"free date calculator",
		"online date calculator",
		"precise age calculation",
		"days between dates",
		"years months days calculator",
	],
	authors: [{ name: "DateCalc Team" }],
	creator: "DateCalc",
	publisher: "DateCalc",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<div className='flex min-h-screen flex-col'>
						<Header />
						<main className='flex-1'>{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
