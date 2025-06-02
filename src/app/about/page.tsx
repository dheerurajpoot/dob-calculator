import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about DateCalc and our mission to provide simple and accurate date calculation tools.",
};

export default function AboutPage() {
	return (
		<div className='container mx-auto px-4 py-12 md:py-16'>
			<div className='mx-auto max-w-3xl'>
				<h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary mb-6'>
					About DateCalc
				</h1>

				<div className='prose prose-lg dark:prose-invert max-w-none'>
					<p>
						Welcome to DateCalc, your go-to resource for accurate
						and easy-to-use date calculation tools. We created
						DateCalc with a simple mission: to make date
						calculations accessible, intuitive, and precise for
						everyone.
					</p>

					<h2>Our Mission</h2>
					<p>
						At DateCalc, we believe that time calculations
						shouldn&apos;t be complicated. Whether you&apos;re
						planning an event, tracking a project timeline,
						calculating your exact age, or simply curious about the
						days between two important dates, our tools are designed
						to give you quick and accurate results.
					</p>

					<h2>What We Offer</h2>
					<p>Our platform features two primary tools:</p>
					<ul>
						<li>
							<strong>Date Difference Calculator:</strong> Find
							the exact time between any two dates in years,
							months, weeks, and days.
						</li>
						<li>
							<strong>Age Calculator:</strong> Calculate your
							precise age from your date of birth, including
							years, months, and days.
						</li>
					</ul>

					<h2>Our Commitment</h2>
					<p>We are committed to:</p>
					<ul>
						<li>
							Providing accurate calculations that you can rely on
						</li>
						<li>
							Maintaining a clean, intuitive interface that&apos;s
							easy to use
						</li>
						<li>
							Ensuring our tools are accessible to everyone,
							regardless of technical expertise
						</li>
						<li>
							Continuously improving our services based on user
							feedback
						</li>
					</ul>

					<p>
						Thank you for choosing DateCalc for your date
						calculation needs. We hope our tools make your life a
						little easier and your time calculations a lot more
						precise.
					</p>
				</div>
			</div>
		</div>
	);
}
