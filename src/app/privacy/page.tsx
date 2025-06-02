import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Learn about how DateCalc collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
	return (
		<div className='container mx-auto px-4 py-12 md:py-16'>
			<div className='mx-auto max-w-3xl'>
				<h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary mb-6'>
					Privacy Policy
				</h1>

				<div className='prose prose-lg dark:prose-invert max-w-none'>
					<p>Last Updated: May 31, 2024</p>

					<h2>1. Introduction</h2>
					<p>
						At DateCalc, we respect your privacy and are committed
						to protecting your personal data. This Privacy Policy
						explains how we collect, use, and safeguard your
						information when you use our date calculation services.
					</p>

					<h2>2. Information We Collect</h2>
					<p>
						We collect minimal information to provide and improve
						our Service:
					</p>
					<ul>
						<li>
							<strong>Usage Data:</strong> Information on how you
							access and use our Service, including your browser
							type, time spent on pages, and other diagnostic
							data.
						</li>
						<li>
							<strong>Contact Information:</strong> If you choose
							to contact us, we may collect your name, email
							address, and any other information you provide.
						</li>
					</ul>

					<h2>3. How We Use Your Information</h2>
					<p>We use the collected data for various purposes:</p>
					<ul>
						<li>To provide and maintain our Service</li>
						<li>To notify you about changes to our Service</li>
						<li>To provide customer support</li>
						<li>
							To gather analysis or valuable information so that
							we can improve our Service
						</li>
						<li>To monitor the usage of our Service</li>
						<li>To detect, prevent and address technical issues</li>
					</ul>

					<h2>4. Data Security</h2>
					<p>
						The security of your data is important to us, but
						remember that no method of transmission over the
						Internet or method of electronic storage is 100% secure.
						While we strive to use commercially acceptable means to
						protect your personal data, we cannot guarantee its
						absolute security.
					</p>

					<h2>5. Cookies and Tracking</h2>
					<p>
						We use cookies and similar tracking technologies to
						track activity on our Service and hold certain
						information. Cookies are files with a small amount of
						data which may include an anonymous unique identifier.
					</p>

					<h2>6. Third-Party Services</h2>
					<p>
						We may employ third-party companies and individuals to
						facilitate our Service, provide the Service on our
						behalf, perform Service-related services, or assist us
						in analyzing how our Service is used. These third
						parties have access to your Personal Data only to
						perform these tasks on our behalf and are obligated not
						to disclose or use it for any other purpose.
					</p>

					<h2>7. Children&apos;s Privacy</h2>
					<p>
						Our Service does not address anyone under the age of 13.
						We do not knowingly collect personally identifiable
						information from children under 13.
					</p>

					<h2>8. Changes to This Privacy Policy</h2>
					<p>
						We may update our Privacy Policy from time to time. We
						will notify you of any changes by posting the new
						Privacy Policy on this page and updating the &quot;Last
						Updated&quot; date.
					</p>

					<h2>9. Contact Us</h2>
					<p>
						If you have any questions about this Privacy Policy,
						please contact us at{" "}
						<a
							href='mailto:privacy@datecalc.com'
							className='text-primary hover:underline'>
							privacy@datecalc.com
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
