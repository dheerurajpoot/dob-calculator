import type { Metadata } from "next";
import { DateCalculator } from "@/components/date-calculator";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { UseCasesSection } from "@/components/use-cases-section";

export const metadata: Metadata = {
	title: "Free Date Difference Calculator & Age Calculator - Accurate Date Tools",
	description:
		"Calculate the exact difference between dates or your precise age with our free, easy-to-use date calculator tools. Get results in years, months, days, and total days instantly.",
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
	],
	openGraph: {
		title: "Free Date Difference Calculator & Age Calculator - Accurate Date Tools",
		description:
			"Calculate the exact difference between dates or your precise age with our free, easy-to-use date calculator tools.",
		type: "website",
		url: "https://datecalc.vercel.app",
	},
};

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-12 md:py-16 lg:py-20'>
				<div className='mx-auto max-w-4xl'>
					<div className='text-center mb-10'>
						<h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary'>
							DateCalc
						</h1>
						<p className='mt-4 text-xl text-muted-foreground max-w-2xl mx-auto'>
							Calculate date differences and ages with precision
							and ease. Free, accurate, and instant results.
						</p>
					</div>
					<DateCalculator />
				</div>
			</section>

			{/* Features Section */}
			<FeaturesSection />

			{/* How It Works Section */}
			<HowItWorksSection />

			{/* Use Cases Section */}
			<UseCasesSection />

			{/* FAQ Section */}
			<FAQSection />

			{/* CTA Section */}
			<CTASection />
		</>
	);
}
