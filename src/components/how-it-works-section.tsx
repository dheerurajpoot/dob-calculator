import { Calendar, ArrowRight, BarChart3 } from "lucide-react";

export function HowItWorksSection() {
	const steps = [
		{
			icon: <Calendar className='h-12 w-12 text-primary' />,
			title: "Select Your Tool",
			description:
				"Choose between Date Difference Calculator or Age Calculator based on your needs.",
		},
		{
			icon: <Calendar className='h-12 w-12 text-primary' />,
			title: "Enter Your Dates",
			description:
				"Pick your dates using our intuitive calendar interface or type them directly.",
		},
		{
			icon: <BarChart3 className='h-12 w-12 text-primary' />,
			title: "Get Instant Results",
			description:
				"View precise calculations in multiple formats: years, months, days, and total days.",
		},
	];

	return (
		<section className='py-16'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4'>
						How It Works
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Get accurate date calculations in just three simple
						steps. No registration required.
					</p>
				</div>

				<div className='max-w-4xl mx-auto'>
					<div className='grid gap-8 md:grid-cols-3'>
						{steps.map((step, index) => (
							<div key={index} className='text-center relative'>
								<div className='flex justify-center mb-4'>
									<div className='bg-primary/10 rounded-full p-4'>
										{step.icon}
									</div>
								</div>
								<div className='absolute -top-2 -left-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold'>
									{index + 1}
								</div>
								<h3 className='text-xl font-semibold mb-3'>
									{step.title}
								</h3>
								<p className='text-muted-foreground'>
									{step.description}
								</p>

								{index < steps.length - 1 && (
									<div className='hidden md:block absolute top-8 -right-4 text-muted-foreground'>
										<ArrowRight className='h-6 w-6' />
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
