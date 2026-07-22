import { ArrowUpRight, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { APP } from "@/constants/app";
import { useSEO } from "@/hooks/useSEO";
import { cn } from "@/lib/utils";

interface FAQ {
	q: string;
	a: React.ReactNode;
	plain: string;
}

interface FAQGroup {
	id: string;
	title: string;
	faqs: FAQ[];
}

const groups: FAQGroup[] = [
	{
		id: "basics",
		title: "Basics",
		faqs: [
			{
				q: "What is Minty Flow?",
				plain:
					"Minty Flow is a free, open-source, privacy-first expense tracker. It helps you record your income and expenses, visualize your spending habits, and manage your budget — all without an account or internet connection.",
				a: "Minty Flow is a free, open-source, privacy-first expense tracker. It helps you record your income and expenses, visualize your spending habits, and manage your budget — all without an account or internet connection.",
			},
			{
				q: "Where do I download Minty Flow?",
				plain:
					'Minty Flow is available on the App Store for iOS and on Google Play for Android. Search for "Minty Flow" or follow the download links on our home page.',
				a: 'Minty Flow is available on the App Store for iOS and on Google Play for Android. Search for "Minty Flow" or follow the download links on our home page.',
			},
			{
				q: "Is Minty Flow free?",
				plain:
					"Yes, Minty Flow is completely free with no premium tier, no ads, and no in-app purchases. If you find it valuable, you can support development via GitHub Sponsors or Buy Me a Coffee — but it is entirely optional.",
				a: "Yes, Minty Flow is completely free with no premium tier, no ads, and no in-app purchases. If you find it valuable, you can support development via GitHub Sponsors or Buy Me a Coffee — but it is entirely optional.",
			},
			{
				q: "Why is Minty Flow free and open source?",
				plain:
					"The developer believes personal finance tools should be accessible to everyone regardless of income. Open-sourcing the code means anyone can audit it for security, contribute improvements, or build on top of it.",
				a: "The developer believes personal finance tools should be accessible to everyone regardless of income. Open-sourcing the code means anyone can audit it for security, contribute improvements, or build on top of it.",
			},
		],
	},
	{
		id: "privacy",
		title: "Data & privacy",
		faqs: [
			{
				q: "Does Minty Flow work offline?",
				plain:
					"Yes. Minty Flow is fully functional offline. All your data is stored locally on your device and every feature works without an internet connection.",
				a: "Yes. Minty Flow is fully functional offline. All your data is stored locally on your device and every feature works without an internet connection.",
			},
			{
				q: "Can I export all my data?",
				plain:
					"Yes. You can export your transactions as a CSV file at any time from the app settings. The export includes all accounts, categories, and transaction history.",
				a: "Yes. You can export your transactions as a CSV file at any time from the app settings. The export includes all accounts, categories, and transaction history.",
			},
			{
				q: "How do I import from other apps?",
				plain:
					"Minty Flow supports CSV import. You can export your data from apps like Ivy or any app that exports to CSV, then reformat the file to match the Minty Flow CSV template (available in the app) and import it via Settings → Import.",
				a: "Minty Flow supports CSV import. You can export your data from apps like Ivy or any app that exports to CSV, then reformat the file to match the Minty Flow CSV template (available in the app) and import it via Settings → Import.",
			},
			{
				q: "Importing erased my data — how do I recover it?",
				plain:
					"Before importing, make sure to export a backup of your existing data from Settings → Export. If you did not have a backup, unfortunately the data cannot be recovered since Minty Flow stores everything locally on your device.",
				a: "Before importing, make sure to export a backup of your existing data from Settings → Export. If you did not have a backup, unfortunately the data cannot be recovered since Minty Flow stores everything locally on your device.",
			},
			{
				q: "Does Minty Flow have autobackup?",
				plain:
					"Minty Flow does not have an autobackup feature. We recommend manually exporting a CSV from Settings → Export regularly so you always have a copy of your data.",
				a: "Minty Flow does not have an autobackup feature. We recommend manually exporting a CSV from Settings → Export regularly so you always have a copy of your data.",
			},
		],
	},
	{
		id: "features",
		title: "Features",
		faqs: [
			{
				q: "Does Minty Flow support multiple currencies?",
				plain:
					"Yes. You can create accounts in different currencies and record transactions in any currency. Exchange rates can be set manually or fetched automatically.",
				a: "Yes. You can create accounts in different currencies and record transactions in any currency. Exchange rates can be set manually or fetched automatically.",
			},
			{
				q: "Can I make transfers between different currency accounts?",
				plain:
					"Yes. Minty Flow supports cross-currency transfers. When you transfer between accounts with different currencies, you can specify the exchange rate for that transaction so your balances stay accurate.",
				a: "Yes. Minty Flow supports cross-currency transfers. When you transfer between accounts with different currencies, you can specify the exchange rate for that transaction so your balances stay accurate.",
			},
			{
				q: "Can I add recurring transactions?",
				plain:
					"Yes. Minty Flow supports recurring transactions — daily, weekly, monthly, and yearly. Set up a recurring rule once and the transactions will be created automatically on the scheduled dates.",
				a: "Yes. Minty Flow supports recurring transactions — daily, weekly, monthly, and yearly. Set up a recurring rule once and the transactions will be created automatically on the scheduled dates.",
			},
			{
				q: "How do recurring transactions work?",
				plain:
					"When you create a recurring transaction, Minty Flow stores the rule on your device. The app checks for due transactions each time it opens and creates the entries automatically. You can edit or delete recurring rules at any time from the transaction detail view.",
				a: "When you create a recurring transaction, Minty Flow stores the rule on your device. The app checks for due transactions each time it opens and creates the entries automatically. You can edit or delete recurring rules at any time from the transaction detail view.",
			},
			{
				q: "How many accounts can I have?",
				plain:
					"There is no limit to the number of accounts you can create in Minty Flow. Create as many as you need for cash, cards, savings, investments, or any other purpose.",
				a: "There is no limit to the number of accounts you can create in Minty Flow. Create as many as you need for cash, cards, savings, investments, or any other purpose.",
			},
		],
	},
	{
		id: "support",
		title: "Support",
		faqs: [
			{
				q: "Will feature X be implemented?",
				plain:
					"Feature requests are tracked on GitHub Issues. Search the existing issues before opening a new one — if the feature is already requested, add a thumbs-up reaction to help prioritize it. The most popular requests are more likely to be implemented.",
				a: "Feature requests are tracked on GitHub Issues. Search the existing issues before opening a new one — if the feature is already requested, add a thumbs-up reaction to help prioritize it. The most popular requests are more likely to be implemented.",
			},
			{
				q: "How do I contact the maintainer?",
				plain: `You can reach the developer by email at ${APP.contact.email} or through the GitHub repository. Response times may vary but all messages are read.`,
				a: (
					<>
						You can reach the developer by email at{" "}
						<a
							href={`mailto:${APP.contact.email}`}
							className="text-foreground underline-offset-4 hover:underline"
						>
							{APP.contact.email}
						</a>{" "}
						or through the GitHub repository. Response times may vary but all
						messages are read.
					</>
				),
			},
		],
	},
];

export function FAQ() {
	const [activeGroup, setActiveGroup] = useState(groups[0].id);

	useSEO({
		title: "FAQ — Minty Flow",
		description:
			"Answers to common questions about Minty Flow: how it works, privacy, multi-currency, recurring transactions, data export, and more.",
		canonical: "https://minty-flow-web.adelefaell.workers.dev/faq",
	});

	useEffect(() => {
		const allFaqs = groups.flatMap((g) => g.faqs);
		const schema = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: allFaqs.map(({ q, plain }) => ({
				"@type": "Question",
				name: q,
				acceptedAnswer: { "@type": "Answer", text: plain },
			})),
		};
		const el = document.createElement("script");
		el.type = "application/ld+json";
		el.id = "faq-schema";
		el.textContent = JSON.stringify(schema);
		document.head.appendChild(el);
		return () => {
			document.getElementById("faq-schema")?.remove();
		};
	}, []);

	const totalFaqs = useMemo(
		() => groups.reduce((sum, g) => sum + g.faqs.length, 0),
		[],
	);

	return (
		<main className="relative isolate overflow-hidden">
			<div className="absolute inset-x-0 top-0 -z-10 h-120 spotlight-bg" />

			<section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
				<div className="mx-auto max-w-2xl text-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
						<HelpCircle className="size-3.5 text-primary" />
						Help center · {totalFaqs} answers
					</span>
					<h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
						How can we help?
					</h1>
					<p className="mt-4 text-muted-foreground">
						Everything you need to know about Minty Flow — privacy, features,
						import/export, and more.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
				<div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
					{/* Section nav */}
					<aside className="lg:sticky lg:top-24 lg:self-start">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
							Categories
						</p>
						<ul className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
							{groups.map((g) => {
								const active = activeGroup === g.id;
								return (
									<li key={g.id}>
										<a
											href={`#${g.id}`}
											onClick={() => setActiveGroup(g.id)}
											className={cn(
												"inline-flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-all lg:rounded-lg lg:py-2",
												active
													? "border-primary/30 bg-primary/10 text-foreground"
													: "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
											)}
										>
											{g.title}
											<span
												className={cn(
													"hidden text-xs tabular-nums lg:inline",
													active ? "text-primary" : "text-muted-foreground",
												)}
											>
												{g.faqs.length}
											</span>
										</a>
									</li>
								);
							})}
						</ul>
					</aside>

					{/* Groups */}
					<div className="flex flex-col gap-16">
						{groups.map((group) => (
							<section key={group.id} id={group.id} className="scroll-mt-28">
								<div className="flex items-baseline justify-between border-b border-border/60 pb-3">
									<h2 className="font-display text-xl font-semibold tracking-tight">
										{group.title}
									</h2>
									<span className="text-xs text-muted-foreground">
										{group.faqs.length}{" "}
										{group.faqs.length === 1 ? "answer" : "answers"}
									</span>
								</div>

								<Accordion type="single" collapsible className="flex flex-col">
									{group.faqs.map((f, i) => (
										<AccordionItem
											key={f.q}
											value={`${group.id}-${i}`}
											className="border-border/60"
										>
											<AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
												{f.q}
											</AccordionTrigger>
											<AccordionContent className="text-sm leading-relaxed text-muted-foreground">
												{f.a}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</section>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 md:pb-28">
				<div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 sm:p-10">
					<div className="absolute inset-0 -z-10 dot-bg opacity-40" />
					<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
						<div className="flex items-start gap-4">
							<span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
								<MessageCircle className="size-5" />
							</span>
							<div>
								<h3 className="font-display text-xl font-bold tracking-tight">
									Still stuck?
								</h3>
								<p className="mt-1.5 text-sm text-muted-foreground">
									Email the maintainer directly — every message gets read.
								</p>
							</div>
						</div>
						<Button asChild size="lg" className="rounded-full px-6">
							<a href={`mailto:${APP.contact.email}`}>
								<Mail className="size-4" />
								Email support
								<ArrowUpRight className="size-3.5" />
							</a>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
