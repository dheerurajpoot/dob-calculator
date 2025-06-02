import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
	const faqs = [
		{
			question: "How accurate are the date calculations?",
			answer: "Our calculations are extremely accurate and account for leap years, different month lengths, and all calendar variations. We use industry-standard date calculation libraries to ensure precision down to the exact day.",
		},
		{
			question: "Is DateCalc free to use?",
			answer: "Yes, DateCalc is completely free to use. There are no hidden fees, subscriptions, or premium features. All our date calculation tools are available to everyone at no cost.",
		},
		{
			question: "Do you store my personal dates?",
			answer: "No, we prioritize your privacy. All calculations happen directly in your browser, and we don't store, track, or save any of the dates you enter. Your personal information remains completely private.",
		},
		{
			question: "Can I use DateCalc on my mobile device?",
			answer: "DateCalc is fully responsive and works perfectly on smartphones, tablets, and desktop computers. The interface adapts to your screen size for the best user experience.",
		},
		{
			question: "What's the difference between the two calculators?",
			answer: "The Date Difference Calculator finds the time between any two dates you choose, while the Age Calculator specifically calculates your age from your birth date to today. Both provide results in years, months, and days.",
		},
		{
			question: "Can I calculate dates far in the past or future?",
			answer: "Yes, our calculators can handle dates from the year 1900 to far into the future. Whether you're calculating historical events or planning future milestones, DateCalc has you covered.",
		},
		{
			question: "Do I need to create an account?",
			answer: "No account required! DateCalc works immediately without any registration, sign-up, or personal information. Just visit the site and start calculating right away.",
		},
		{
			question:
				"Are the results reliable for legal or official purposes?",
			answer: "While our calculations are highly accurate, we recommend verifying important dates independently for legal, medical, or official purposes. DateCalc is designed for general use and planning.",
		},
	];

	return (
		<section className='py-16'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4'>
						Frequently Asked Questions
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Got questions? We&apos;ve got answers. Find everything you
						need to know about using DateCalc.
					</p>
				</div>

				<div className='max-w-3xl mx-auto'>
					<Accordion type='single' collapsible className='w-full'>
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className='text-left'>
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className='text-muted-foreground'>
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
