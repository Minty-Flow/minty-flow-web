import { Lock, ShieldCheck, Smartphone, WifiOff } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { APP } from "@/constants/app";
import { cn } from "@/lib/utils";

export const trustRow = [
	{ icon: ShieldCheck, label: "No account" },
	{ icon: WifiOff, label: "Works offline" },
	{ icon: Lock, label: "Local-only data" },
	{ icon: GithubIcon, label: "GPL-3.0 licensed" },
];

export function PrimaryCTA() {
	return (
		<div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
			<Button asChild size="lg" className="rounded-full px-6 shadow-glow">
				<a
					href={APP.links.googlePlay}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Smartphone className="size-4" />
					Get it on Google Play
				</a>
			</Button>
			<Button
				asChild
				variant="outline"
				size="lg"
				className="rounded-full border-border/70 bg-background/60 px-6 backdrop-blur"
			>
				<a
					href={APP.links.githubReleases}
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubIcon className="size-4" />
					Download APK
				</a>
			</Button>
		</div>
	);
}

export function StatusChip() {
	return (
		<div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
			<span className="relative flex size-1.5">
				<span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
				<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
			</span>
			Open source · 100% free · Privacy first
		</div>
	);
}

export function TrustRow({ centered = false }: { centered?: boolean }) {
	return (
		<ul
			className={cn(
				"mt-8 flex flex-wrap items-center gap-x-5 gap-y-2",
				centered && "justify-center",
			)}
		>
			{trustRow.map(({ icon: Icon, label }) => (
				<li
					key={label}
					className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
				>
					<Icon className="size-3.5 text-primary/80" />
					{label}
				</li>
			))}
		</ul>
	);
}
