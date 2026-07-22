import {
	ArrowRight,
	Coins,
	Download,
	FileSpreadsheet,
	Heart,
	Lock,
	Palette,
	Repeat2,
	Sparkles,
	Wallet,
	WifiOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HeroPhone } from "@/components/hero/HeroPhone";
import { PrimaryCTA } from "@/components/hero/shared";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { APP } from "@/constants/app";
import { useSEO } from "@/hooks/useSEO";

const pillars = [
	{
		icon: Heart,
		label: "Free forever",
		text: "No paywalls, no premium tier, no subscriptions. Now and always.",
	},
	{
		icon: Lock,
		label: "Private by design",
		text: "Data lives on your device. No accounts, no servers, no analytics.",
	},
	{
		icon: WifiOff,
		label: "Fully offline",
		text: "Works without the internet. Open the app and start tracking.",
	},
	{
		icon: GithubIcon,
		label: "Open source",
		text: "Source code public on GitHub. Audit it, contribute, or self-host.",
	},
];

const steps = [
	{
		n: "01",
		title: "Install",
		text: "Grab it from Google Play or sideload the APK from GitHub.",
		icon: Download,
	},
	{
		n: "02",
		title: "Add accounts",
		text: "Cash, cards, savings, investments — in any currency you use.",
		icon: Wallet,
	},
	{
		n: "03",
		title: "Track daily",
		text: "Log transactions, set budgets, watch where the money goes.",
		icon: Sparkles,
	},
];

const themeSwatches = [
	"oklch(0.7 0.16 148)",
	"oklch(0.7 0.16 230)",
	"oklch(0.7 0.16 30)",
	"oklch(0.7 0.16 300)",
	"oklch(0.7 0.16 80)",
	"oklch(0.7 0.16 180)",
];

export function Home() {
	const icon = `${import.meta.env.BASE_URL}icon.png`;
	useSEO({
		title: "Minty Flow — Free, Private Expense Tracker for Android",
		description:
			"Minty Flow is a free, open-source expense tracker that works 100% offline. No account, no ads, no subscriptions. Track income, expenses, and budgets with 60+ themes on Android.",
		canonical: "https://minty-flow-web.adelefaell.workers.dev/",
	});

	return (
		<main>
			{/* HERO */}
			<section className="relative isolate overflow-hidden">
				<div className="absolute inset-0 -z-10 mesh-bg" />
				<div className="absolute inset-0 -z-10 grid-bg" />

				<div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:pb-28">
					<HeroPhone />
				</div>
			</section>

			{/* TRUST STRIP */}
			<section className="border-y border-border/60 bg-muted/30">
				<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-xs text-muted-foreground sm:px-6">
					<span className="font-medium uppercase tracking-wider text-muted-foreground">
						Built on
					</span>
					<span className="inline-flex items-center gap-1.5">
						<Lock className="size-3.5" /> Zero-knowledge by default
					</span>
					<span className="inline-flex items-center gap-1.5">
						<WifiOff className="size-3.5" /> Works without the internet
					</span>
					<span className="inline-flex items-center gap-1.5">
						<GithubIcon className="size-3.5" /> GPL-3.0 source code
					</span>
					<span className="inline-flex items-center gap-1.5">
						<Heart className="size-3.5" /> Made with care
					</span>
				</div>
			</section>

			{/* PILLARS */}
			<section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-28">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
						Principles
					</p>
					<h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
						Four ideas. No exceptions.
					</h2>
					<p className="mt-4 text-muted-foreground">
						Every decision in Minty Flow comes back to these.
					</p>
				</div>

				<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{pillars.map(({ icon: Icon, label, text }) => (
						<div
							key={label}
							className="group relative rounded-2xl border border-border/60 bg-card/60 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
						>
							<span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
								<Icon className="size-5" />
							</span>
							<h3 className="mt-5 font-display text-base font-semibold text-foreground">
								{label}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								{text}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* BENTO FEATURES */}
			<section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-28">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
						Features
					</p>
					<h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
						Everything you need.
						<span className="text-muted-foreground"> Nothing you don't.</span>
					</h2>
				</div>

				<div className="mt-14 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
					{/* Multi-currency */}
					<div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 sm:col-span-2 lg:col-span-3 lg:row-span-2">
						<div className="absolute inset-0 -z-10 dot-bg opacity-60" />
						<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
							<Coins className="size-4" />
							Multi-currency
						</div>
						<h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
							Track in any currency.
						</h3>
						<p className="mt-2 max-w-sm text-sm text-muted-foreground">
							Live exchange rates for cross-currency transfers. Balances stay
							accurate no matter where you spend.
						</p>
						<div className="mt-6 flex flex-wrap gap-2">
							{["USD", "EUR", "JPY", "GBP", "MNT", "AUD", "INR"].map((c) => (
								<span
									key={c}
									className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 font-mono text-xs"
								>
									{c}
								</span>
							))}
						</div>
					</div>

					{/* Themes */}
					<div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 sm:col-span-2 lg:col-span-3">
						<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
							<Palette className="size-4" />
							60+ themes
						</div>
						<h3 className="mt-4 font-display text-xl font-bold tracking-tight">
							Catppuccin, Nord, Mint.
						</h3>
						<p className="mt-1.5 text-sm text-muted-foreground">
							Tracking that looks good. Pick yours.
						</p>
						<div className="mt-5 flex items-center -space-x-2">
							{themeSwatches.map((c) => (
								<span
									key={c}
									className="size-8 rounded-full border-2 border-card shadow-sm"
									style={{ background: c }}
								/>
							))}
							<span className="ml-3 text-xs text-muted-foreground">
								+ 50 more
							</span>
						</div>
					</div>

					{/* Recurring */}
					<div className="rounded-3xl border border-border/60 bg-card p-7 sm:col-span-2 lg:col-span-3">
						<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
							<Repeat2 className="size-4" />
							Recurring rules
						</div>
						<h3 className="mt-4 font-display text-base font-semibold">
							Set once. Automated forever.
						</h3>
						<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
							Daily, weekly, monthly, yearly.
						</p>
					</div>

					{/* Unlimited accounts */}
					<div className="rounded-3xl border border-border/60 bg-card p-7 sm:col-span-2 lg:col-span-3">
						<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
							<Wallet className="size-4" />
							Unlimited accounts
						</div>
						<h3 className="mt-4 font-display text-base font-semibold">
							Cash, cards, savings, investments.
						</h3>
						<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
							No caps. Group however you like.
						</p>
					</div>

					{/* CSV */}
					<div className="rounded-3xl border border-border/60 bg-card p-7 sm:col-span-2 lg:col-span-3">
						<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
							<FileSpreadsheet className="size-4" />
							CSV import / export
						</div>
						<h3 className="mt-4 font-display text-base font-semibold">
							Your data, in and out.
						</h3>
						<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
							Always yours. Always portable.
						</p>
					</div>
				</div>
			</section>

			{/* HOW IT WORKS */}
			<section className="relative isolate overflow-hidden border-y border-border/60 bg-muted/30">
				<div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-28">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
								Getting started
							</p>
							<h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
								Up and running in three steps.
							</h2>
							<p className="mt-4 max-w-md text-muted-foreground">
								No setup wizards. No cloud accounts. Just open the app and
								start.
							</p>
						</div>

						<ol className="relative flex flex-col gap-4">
							<span
								aria-hidden
								className="pointer-events-none absolute left-[1.45rem] top-12 bottom-12 w-px bg-border/60"
							/>
							{steps.map(({ n, title, text, icon: Icon }) => (
								<li
									key={n}
									className="relative flex items-start gap-5 rounded-2xl border border-border/60 bg-card p-5"
								>
									<span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow">
										<Icon className="size-5" />
									</span>
									<div className="min-w-0 flex-1">
										<div className="flex items-baseline gap-3">
											<span className="font-mono text-xs text-muted-foreground">
												{n}
											</span>
											<h3 className="font-display text-lg font-semibold">
												{title}
											</h3>
										</div>
										<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
											{text}
										</p>
									</div>
								</li>
							))}
						</ol>
					</div>
				</div>
			</section>

			{/* OPEN SOURCE BAND */}
			<section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-28">
				<div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 sm:p-12">
					<div className="absolute inset-0 -z-10 dot-bg opacity-40" />
					<div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
						<div>
							<div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
								<GithubIcon className="size-3.5" />
								Open source on GitHub
							</div>
							<h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl">
								Audit the code. Or contribute one.
							</h2>
							<p className="mt-4 max-w-lg text-muted-foreground">
								Every line of Minty Flow is on GitHub under the GPL-3.0 license.
								Read it, fork it, file an issue, send a PR.
							</p>
							<div className="mt-7 flex flex-wrap items-center gap-3">
								<Button
									asChild
									variant="outline"
									size="lg"
									className="rounded-full border-border/70"
								>
									<a
										href={APP.links.githubRepo}
										target="_blank"
										rel="noopener noreferrer"
									>
										<GithubIcon className="size-4" />
										View the repo
									</a>
								</Button>
								<Link
									to="/changelog"
									className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
								>
									Read the changelog
									<ArrowRight className="size-3.5" />
								</Link>
							</div>
						</div>

						<dl className="grid grid-cols-2 gap-3 sm:grid-cols-2">
							{[
								{ k: "GPL-3.0", v: "License" },
								{ k: "Android", v: "Available now" },
								{ k: "iOS", v: "Coming soon" },
								{ k: "0", v: "Trackers" },
							].map((s) => (
								<div
									key={s.v}
									className="rounded-2xl border border-border/60 bg-background/60 p-5"
								>
									<dt className="font-display text-2xl font-bold tracking-tight text-foreground">
										{s.k}
									</dt>
									<dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
										{s.v}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="relative isolate overflow-hidden">
				<div className="absolute inset-0 -z-10 spotlight-bg" />
				<div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 md:py-32">
					<img
						src={icon}
						alt=""
						className="mx-auto size-14 rounded-2xl ring-1 ring-border/60 shadow-glow"
					/>
					<h2 className="mt-8 font-display text-4xl font-bold tracking-tight md:text-5xl">
						Ready when you are.
					</h2>
					<p className="mx-auto mt-4 max-w-md text-muted-foreground">
						Download free. No sign-up. Just open it and start.
					</p>
					<div className="mt-10 flex justify-center">
						<PrimaryCTA />
					</div>
					<p className="mt-8 text-sm text-muted-foreground">
						Questions?{" "}
						<Link
							to="/faq"
							className="text-foreground underline-offset-4 hover:underline"
						>
							Read the FAQ
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
