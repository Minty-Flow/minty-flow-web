import { Building2, Car, Coffee, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryCTA, StatusChip, TrustRow } from "./shared";

const phoneRows = [
	{ icon: ShoppingBag, amount: "-$42.10", positive: false },
	{ icon: Coffee, amount: "-$5.75", positive: false },
	{ icon: Building2, amount: "+$2,400", positive: true },
	{ icon: Car, amount: "-$28.00", positive: false },
];

function PhoneMockup() {
	return (
		<div className="relative mx-auto w-full max-w-[18rem]">
			<div className="rounded-[2.5rem] border border-border/70 bg-card/90 p-3 shadow-2xl backdrop-blur">
				<div className="overflow-hidden rounded-[2rem] border border-border/50 bg-background/80 px-5 pb-5 pt-4">
					{/* status bar */}
					<div className="flex items-center justify-between text-[10px] font-medium text-muted-foreground">
						<span>9:41</span>
						<span className="inline-flex items-center gap-1 text-muted-foreground">
							<span className="inline-block size-1 rounded-full bg-current" />
							<span className="inline-block size-1 rounded-full bg-current" />
							<span className="inline-block size-1 rounded-full bg-current" />
						</span>
					</div>

					{/* balance card */}
					<div className="mt-4 rounded-2xl border border-primary/25 bg-primary/10 p-4">
						<div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
							Total balance
						</div>
						<div className="mt-1 font-display text-2xl font-bold tabular-nums text-foreground">
							$8,240.55
						</div>
					</div>

					{/* transactions */}
					<ul className="mt-4 flex flex-col gap-2.5">
						{phoneRows.map(({ icon: Icon, amount, positive }, i) => (
							<li
								key={i.toString()}
								className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/60 p-2.5"
							>
								<span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
									<Icon className="size-3.5" />
								</span>
								<div className="flex-1 space-y-1">
									<div className="h-1.5 w-3/4 rounded-full bg-muted" />
									<div className="h-1.5 w-1/2 rounded-full bg-muted/60" />
								</div>
								<span
									className={cn(
										"font-mono text-xs font-semibold tabular-nums",
										positive ? "text-primary" : "text-rose-500/90",
									)}
								>
									{amount}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export function HeroPhone() {
	return (
		<div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
			<div className="animate-fade-up">
				<StatusChip />

				<h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
					Your money.
					<br />
					<span className="text-gradient">Your rules.</span>
				</h1>

				<p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
					A free, open-source expense tracker that keeps your data where it
					belongs — on your device. No accounts. No ads. No compromises.
				</p>

				<div className="mt-9">
					<PrimaryCTA />
				</div>

				<TrustRow />
			</div>

			<div className="flex justify-center">
				<PhoneMockup />
			</div>
		</div>
	);
}
