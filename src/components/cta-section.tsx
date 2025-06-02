"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";

export function CTASection() {
	const scrollToCalculator = () => {
		const calculatorElement = document.querySelector("[data-calculator]");
		if (calculatorElement) {
			calculatorElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className='py-16 bg-primary'>
			<div className='container mx-auto px-4'>
				<div className='text-center max-w-3xl mx-auto'>
					<div className='flex justify-center mb-6'>
						<div className='bg-white/10 rounded-full p-4'>
							<Calculator className='h-12 w-12 text-white' />
						</div>
					</div>

					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-white mb-4'>
						Ready to Calculate Your Dates?
					</h2>
					<p className='text-xl text-white/90 mb-8'>
						Join thousands of users who trust DateCalc for accurate
						date calculations. Start calculating now - it&apos;s
						free, fast, and precise.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							size='lg'
							variant='secondary'
							onClick={scrollToCalculator}
							className='text-primary hover:text-primary/90'>
							Start Calculating Now
							<ArrowRight className='ml-2 h-5 w-5' />
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='border-white text-white hover:bg-white hover:text-primary'
							asChild>
							<a href='/about'>Learn More About Us</a>
						</Button>
					</div>

					<div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80'>
						<div className='text-center'>
							<div className='text-2xl font-bold text-white'>
								100%
							</div>
							<div className='text-sm'>Free Forever</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-white'>
								0
							</div>
							<div className='text-sm'>Registration Required</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-white'>
								24/7
							</div>
							<div className='text-sm'>Always Available</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
