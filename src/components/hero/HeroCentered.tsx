import { PrimaryCTA, StatusChip, TrustRow } from "./shared";

export function HeroCentered() {
	return (
		<div className="mx-auto flex max-w-3xl flex-col items-center text-center animate-fade-up">
			<StatusChip />

			<h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]">
				Your money. <span className="text-gradient">Your rules.</span>
			</h1>

			<p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
				A free, open-source expense tracker that keeps your data where it
				belongs — on your device. No accounts. No ads. No compromises.
			</p>

			<div className="mt-9">
				<PrimaryCTA />
			</div>

			<TrustRow centered />
		</div>
	);
}
