import { Calendar, Clock, Calculator, Zap, Shield, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
	const features = [
		{
			icon: <Calculator className='h-8 w-8 text-primary' />,
			title: "Precise Calculations",
			description:
				"Get exact results down to the day with our advanced date calculation algorithms.",
		},
		{
			icon: <Zap className='h-8 w-8 text-primary' />,
			title: "Instant Results",
			description:
				"No waiting, no loading. Get your date calculations instantly as you type.",
		},
		{
			icon: <Calendar className='h-8 w-8 text-primary' />,
			title: "Multiple Formats",
			description:
				"View results in years, months, days, and total days for complete flexibility.",
		},
		{
			icon: <Globe className='h-8 w-8 text-primary' />,
			title: "Works Everywhere",
			description:
				"Access from any device, anywhere. No downloads or installations required.",
		},
		{
			icon: <Shield className='h-8 w-8 text-primary' />,
			title: "Privacy First",
			description:
				"All calculations happen in your browser. We don't store your personal dates.",
		},
		{
			icon: <Clock className='h-8 w-8 text-primary' />,
			title: "Always Available",
			description:
				"24/7 access to our date calculation tools whenever you need them.",
		},
	];

	return (
		<section className='py-16 bg-muted/50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4'>
						Why Choose DateCalc?
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Powerful features designed to make date calculations
						simple, accurate, and accessible for everyone.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{features.map((feature, index) => (
						<Card
							key={index}
							className='border-0 shadow-sm hover:shadow-md transition-shadow'>
							<CardContent className='p-6'>
								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0'>
										{feature.icon}
									</div>
									<div>
										<h3 className='text-lg font-semibold mb-2'>
											{feature.title}
										</h3>
										<p className='text-muted-foreground'>
											{feature.description}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
