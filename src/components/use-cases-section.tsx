import {
	Heart,
	Briefcase,
	GraduationCap,
	Baby,
	Calendar,
	Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function UseCasesSection() {
	const useCases = [
		{
			icon: <Heart className='h-8 w-8 text-red-500' />,
			title: "Relationship Milestones",
			description:
				"Calculate anniversaries, dating milestones, and special relationship moments.",
			examples: [
				"Wedding anniversaries",
				"Dating milestones",
				"First date memories",
			],
		},
		{
			icon: <Briefcase className='h-8 w-8 text-blue-500' />,
			title: "Professional Planning",
			description:
				"Track project timelines, employment duration, and business milestones.",
			examples: [
				"Project deadlines",
				"Employment history",
				"Contract periods",
			],
		},
		{
			icon: <GraduationCap className='h-8 w-8 text-green-500' />,
			title: "Educational Goals",
			description:
				"Monitor academic progress, graduation dates, and study schedules.",
			examples: [
				"Graduation countdown",
				"Semester planning",
				"Study schedules",
			],
		},
		{
			icon: <Baby className='h-8 w-8 text-pink-500' />,
			title: "Family Events",
			description:
				"Track children's ages, pregnancy milestones, and family celebrations.",
			examples: [
				"Child development",
				"Pregnancy tracking",
				"Birthday planning",
			],
		},
		{
			icon: <Calendar className='h-8 w-8 text-purple-500' />,
			title: "Event Planning",
			description:
				"Plan weddings, parties, vacations, and other special events.",
			examples: [
				"Wedding planning",
				"Vacation countdown",
				"Party organization",
			],
		},
		{
			icon: <Clock className='h-8 w-8 text-orange-500' />,
			title: "Personal Goals",
			description:
				"Track fitness goals, habit formation, and personal achievements.",
			examples: [
				"Fitness milestones",
				"Habit tracking",
				"Goal achievement",
			],
		},
	];

	return (
		<section className='py-16 bg-muted/50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4'>
						Perfect for Every Occasion
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						From personal milestones to professional planning,
						DateCalc helps you track what matters most.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{useCases.map((useCase, index) => (
						<Card
							key={index}
							className='border-0 shadow-sm hover:shadow-md transition-shadow'>
							<CardContent className='p-6'>
								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0'>
										{useCase.icon}
									</div>
									<div className='flex-1'>
										<h3 className='text-lg font-semibold mb-2'>
											{useCase.title}
										</h3>
										<p className='text-muted-foreground mb-3'>
											{useCase.description}
										</p>
										<ul className='text-sm text-muted-foreground space-y-1'>
											{useCase.examples.map(
												(example, idx) => (
													<li
														key={idx}
														className='flex items-center'>
														<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></span>
														{example}
													</li>
												)
											)}
										</ul>
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
