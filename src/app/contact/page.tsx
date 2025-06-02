import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with the DateCalc team for questions, feedback, or support.",
};

export default function ContactPage() {
	return (
		<div className='container mx-auto px-4 py-12 md:py-16'>
			<div className='mx-auto max-w-3xl'>
				<h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary mb-6'>
					Contact Us
				</h1>

				<div className='prose prose-lg dark:prose-invert max-w-none mb-8'>
					<p>
						Have questions, suggestions, or feedback about DateCalc?
						We&apos;d love to hear from you! Fill out the form below
						and our team will get back to you as soon as possible.
					</p>
				</div>

				<ContactForm />

				<div className='mt-12 grid gap-8 md:grid-cols-2'>
					<div className='rounded-lg border p-6'>
						<h2 className='text-xl font-semibold mb-4'>Email Us</h2>
						<p className='text-muted-foreground mb-2'>
							For general inquiries:
						</p>
						<a
							href='mailto:info@datecalc.com'
							className='text-primary hover:underline'>
							info@datecalc.com
						</a>
						<p className='text-muted-foreground mt-4 mb-2'>
							For support:
						</p>
						<a
							href='mailto:support@datecalc.com'
							className='text-primary hover:underline'>
							support@datecalc.com
						</a>
					</div>

					<div className='rounded-lg border p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Connect With Us
						</h2>
						<p className='text-muted-foreground mb-4'>
							Follow us on social media for updates, tips, and
							more:
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='text-primary hover:text-primary/80'>
								Twitter
							</a>
							<a
								href='#'
								className='text-primary hover:text-primary/80'>
								Facebook
							</a>
							<a
								href='#'
								className='text-primary hover:text-primary/80'>
								Instagram
							</a>
							<a
								href='#'
								className='text-primary hover:text-primary/80'>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
