import { ShieldCheck } from "lucide-react";
import { APP } from "@/constants/app";
import { useSEO } from "@/hooks/useSEO";

interface Section {
	id: string;
	title: string;
	body: React.ReactNode;
}

const sections: Section[] = [
	{
		id: "introduction",
		title: "Introduction",
		body: (
			<p>
				This Privacy Policy describes how Flow, a personal finance app developed
				by Batmend Ganbaatar ("we", "us", or "our"), handles your information.
				We built Flow with your privacy in mind — your data belongs to you.
			</p>
		),
	},
	{
		id: "information-we-collect",
		title: "Information we collect",
		body: (
			<>
				<p>
					Flow does not collect, transmit, or store any personal information on
					our servers. All your data — including preferences, settings, and
					saved content — lives entirely on your device and is never accessible
					to us.
				</p>
				<p>
					That said, the app does make secure HTTPS requests to external
					services (for example, to fetch live exchange rates or load
					contributor information). These requests may expose some technical
					metadata — such as your device's IP address or request headers — to
					those third-party services.
				</p>
			</>
		),
	},
	{
		id: "use-of-information",
		title: "Use of information",
		body: (
			<p>
				Since we don't collect any personal information, we have no personal
				data to use for analytics, advertising, or any other purpose. Plain and
				simple.
			</p>
		),
	},
	{
		id: "data-sharing",
		title: "Data sharing",
		body: (
			<>
				<p>
					We do not share, sell, or hand over any personal data to third parties
					— and because we don't collect your data in the first place, there is
					nothing to share.
				</p>
				<p>
					<span className="font-medium text-foreground">
						Note for Apple users:
					</span>{" "}
					If you use Flow on macOS or iOS, your local app data may be included
					in iCloud backups. We have no control over or access to iCloud data.
					Please review{" "}
					<a
						href="https://www.apple.com/legal/privacy/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline-offset-4 hover:underline"
					>
						Apple's Privacy Policy
					</a>{" "}
					for details.
				</p>
			</>
		),
	},
	{
		id: "data-security",
		title: "Data security",
		body: (
			<p>
				We take reasonable precautions to help protect the information you store
				within Flow. That said, no software can guarantee absolute security. You
				are responsible for keeping your device secure and your data backed up.
			</p>
		),
	},
	{
		id: "third-party-services",
		title: "Third-party services",
		body: (
			<>
				<p>
					Flow does not integrate any advertising networks, social media SDKs,
					or cross-app tracking tools.
				</p>
				<p>
					To power certain features — like live currency exchange rates or
					displaying project contributors — Flow sends HTTPS requests to
					third-party APIs. These services may receive technical metadata such
					as your IP address, OS type, or request headers. We don't control how
					those services handle that data, so we encourage you to review their
					respective privacy policies.
				</p>
			</>
		),
	},
	{
		id: "changes-to-this-policy",
		title: "Changes to this policy",
		body: (
			<p>
				We may revise this Privacy Policy occasionally. When we do, we'll update
				the effective date at the top of this page. Continuing to use Flow after
				any changes means you accept the updated policy. We recommend checking
				back periodically.
			</p>
		),
	},
];

export function PrivacyPolicy() {
	useSEO({
		title: "Privacy Policy — Minty Flow",
		description:
			"Minty Flow stores all your data locally on your device. We collect no personal information, use no analytics, and have no servers. Read our full privacy policy.",
		canonical: "https://minty-flow-web.adelefaell.workers.dev/privacy",
	});

	return (
		<main className="relative isolate overflow-hidden">
			<div className="absolute inset-x-0 top-0 -z-10 h-105 spotlight-bg" />

			<section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
				<div className="mx-auto max-w-2xl text-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
						<ShieldCheck className="size-3.5 text-primary" />
						Legal · Effective May 17, 2025
					</span>
					<h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
						Privacy Policy
					</h1>
					<p className="mt-4 text-muted-foreground">
						Short version: we don't collect your data. Long version below.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
				<div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
					<aside className="lg:sticky lg:top-24 lg:self-start">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
							On this page
						</p>
						<ul className="mt-4 flex flex-col gap-1">
							{sections.map((s) => (
								<li key={s.id}>
									<a
										href={`#${s.id}`}
										className="block rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
									>
										{s.title}
									</a>
								</li>
							))}
							<li>
								<a
									href="#contact"
									className="block rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
								>
									Contact
								</a>
							</li>
						</ul>
					</aside>

					<article className="prose prose-neutral max-w-none">
						<div className="flex flex-col divide-y divide-border/60">
							{sections.map((s) => (
								<section
									key={s.id}
									id={s.id}
									className="scroll-mt-24 py-8 first:pt-0"
								>
									<h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
										{s.title}
									</h2>
									<div className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-muted-foreground">
										{s.body}
									</div>
								</section>
							))}

							<section id="contact" className="scroll-mt-24 py-8">
								<h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
									Contact
								</h2>
								<p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
									Questions or concerns? Reach out at{" "}
									<a
										href={`mailto:${APP.contact.email}`}
										className="text-foreground underline-offset-4 hover:underline"
									>
										{APP.contact.email}
									</a>
									.
								</p>
							</section>
						</div>
					</article>
				</div>
			</section>
		</main>
	);
}
