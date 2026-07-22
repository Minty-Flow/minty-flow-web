import { ArrowUpRight, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { APP } from "@/constants/app";

const groups = [
	{
		title: "Product",
		links: [
			{ label: "Download", href: APP.links.googlePlay, external: true },
			{
				label: "GitHub Releases",
				href: APP.links.githubReleases,
				external: true,
			},
			{ label: "Changelog", href: "/changelog", external: false },
		],
	},
	{
		title: "Project",
		links: [
			{ label: "GitHub", href: APP.links.githubOrg, external: true },
			{ label: "Issues", href: APP.links.githubIssues, external: true },
		],
	},
	{
		title: "Info",
		links: [
			{ label: "FAQ", href: "/faq", external: false },
			{ label: "Privacy", href: "/privacy", external: false },
			{
				label: "Contact",
				href: `mailto:${APP.contact.email}`,
				external: true,
			},
		],
	},
];

export function Footer() {
	const icon = `${import.meta.env.BASE_URL}icon.png`;
	return (
		<footer className="relative isolate mt-24 overflow-hidden border-t border-border/60">
			<div className="absolute inset-0 -z-10 dot-bg opacity-30" />

			<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
				{/* CTA strip */}
				<div className="mb-14 flex flex-col items-start justify-between gap-5 rounded-3xl border border-border/60 bg-card/70 p-7 backdrop-blur sm:flex-row sm:items-center sm:p-9">
					<div className="max-w-md">
						<h3 className="font-display text-xl font-bold tracking-tight">
							Tracking that respects you.
						</h3>
						<p className="mt-1.5 text-sm text-muted-foreground">
							Free. Open source. On your device.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg" className="rounded-full px-6 shadow-glow">
							<a
								href={APP.links.googlePlay}
								target="_blank"
								rel="noopener noreferrer"
							>
								Get the app
								<ArrowUpRight className="size-3.5" />
							</a>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="rounded-full border-border/70 px-6"
						>
							<a
								href={APP.links.githubRepo}
								target="_blank"
								rel="noopener noreferrer"
							>
								<GithubIcon className="size-4" />
								Source
							</a>
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-10 sm:grid-cols-5">
					<div className="col-span-2">
						<Link
							to="/"
							className="inline-flex items-center gap-2.5 text-foreground"
						>
							<img
								src={icon}
								alt=""
								className="size-7 rounded-lg ring-1 ring-border/60"
							/>
							<span className="font-display text-base font-bold tracking-tight">
								{APP.name}
							</span>
						</Link>
						<p className="mt-4 max-w-xs text-sm text-muted-foreground">
							{APP.tagline} Track your money. Keep your privacy.
						</p>
						<div className="mt-5 flex items-center gap-2">
							<a
								href={APP.links.githubRepo}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
							>
								<GithubIcon className="size-4" />
							</a>
							<a
								href={`mailto:${APP.contact.email}`}
								aria-label="Email"
								className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
							>
								<Mail className="size-4" />
							</a>
						</div>
					</div>

					{groups.map((g) => (
						<div key={g.title}>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
								{g.title}
							</p>
							<ul className="mt-4 flex flex-col gap-2.5">
								{g.links.map((l) =>
									l.external ? (
										<li key={l.label}>
											<a
												href={l.href}
												target={
													l.href.startsWith("mailto:") ? undefined : "_blank"
												}
												rel="noopener noreferrer"
												className="text-sm text-muted-foreground transition-colors hover:text-foreground"
											>
												{l.label}
											</a>
										</li>
									) : (
										<li key={l.label}>
											<Link
												to={l.href}
												className="text-sm text-muted-foreground transition-colors hover:text-foreground"
											>
												{l.label}
											</Link>
										</li>
									),
								)}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
					<p>
						© {new Date().getFullYear()} {APP.name} · GPL-3.0 licensed
					</p>
					<p className="inline-flex items-center gap-1.5">
						Built with <Heart className="size-3 text-primary" /> for your
						privacy
					</p>
				</div>
			</div>
		</footer>
	);
}
