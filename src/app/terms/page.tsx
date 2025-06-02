import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"Read the terms and conditions for using DateCalc's date calculation tools and services.",
};

export default function TermsPage() {
	return (
		<div className='container mx-auto px-4 py-12 md:py-16'>
			<div className='mx-auto max-w-3xl'>
				<h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary mb-6'>
					Terms of Service
				</h1>

				<div className='prose prose-lg dark:prose-invert max-w-none'>
					<p>Last Updated: May 31, 2024</p>

					<h2>1. Acceptance of Terms</h2>
					<p>
						By accessing or using DateCalc (&quot;the
						Service&quot;), you agree to be bound by these Terms of
						Service. If you do not agree to these terms, please do
						not use the Service.
					</p>

					<h2>2. Description of Service</h2>
					<p>
						DateCalc provides tools for calculating date differences
						and ages. The Service is provided &quot;as is&quot; and
						&quot;as available&quot; without warranties of any kind.
					</p>

					<h2>3. Use of the Service</h2>
					<p>
						You agree to use the Service only for lawful purposes
						and in accordance with these Terms. You are responsible
						for ensuring that your use of the Service complies with
						all applicable laws and regulations.
					</p>

					<h2>4. Accuracy of Calculations</h2>
					<p>
						While we strive to provide accurate calculations, we do
						not guarantee the accuracy, completeness, or reliability
						of any results obtained through the Service. Users
						should verify important calculations independently.
					</p>

					<h2>5. Intellectual Property</h2>
					<p>
						All content, features, and functionality of the Service,
						including but not limited to text, graphics, logos, and
						code, are the exclusive property of DateCalc and are
						protected by copyright, trademark, and other
						intellectual property laws.
					</p>

					<h2>6. Privacy</h2>
					<p>
						Your use of the Service is also governed by our Privacy
						Policy, which can be found at{" "}
						<a
							href='/privacy'
							className='text-primary hover:underline'>
							Privacy Policy
						</a>
						.
					</p>

					<h2>7. Limitation of Liability</h2>
					<p>
						In no event shall DateCalc be liable for any indirect,
						incidental, special, consequential, or punitive damages,
						including without limitation, loss of profits, data,
						use, goodwill, or other intangible losses, resulting
						from your access to or use of or inability to access or
						use the Service.
					</p>

					<h2>8. Changes to Terms</h2>
					<p>
						We reserve the right to modify these Terms at any time.
						We will provide notice of any material changes by
						updating the &quot;Last Updated&quot; date at the top of
						these Terms. Your continued use of the Service after
						such modifications will constitute your acknowledgment
						of the modified Terms.
					</p>

					<h2>9. Contact Us</h2>
					<p>
						If you have any questions about these Terms, please
						contact us at{" "}
						<a
							href='mailto:legal@datecalc.com'
							className='text-primary hover:underline'>
							legal@datecalc.com
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
