import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { APP } from "@/constants/app";
import { useTheme } from "@/contexts/theme";
import { cn } from "@/lib/utils";

const links = [
	{ to: "/", label: "Home" },
	{ to: "/changelog", label: "Changelog" },
	{ to: "/faq", label: "FAQ" },
	{ to: "/privacy", label: "Privacy" },
];

export function Navbar() {
	const icon = `${import.meta.env.BASE_URL}icon.png`;
	const { pathname } = useLocation();
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="sticky top-0 z-50">
			<div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-border to-transparent" />
			<div className="glass-strong">
				<nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
					<Link
						to="/"
						className="group flex items-center gap-2.5 text-foreground"
					>
						<span className="relative inline-flex">
							<span className="absolute inset-0 -z-10 rounded-xl bg-primary/30 blur-md transition-opacity group-hover:opacity-100 opacity-60" />
							<img
								src={icon}
								alt=""
								className="size-8 rounded-xl ring-1 ring-border/60"
							/>
						</span>
						<span className="font-display text-base font-bold tracking-tight">
							{APP.name}
						</span>
					</Link>

					<div className="hidden items-center gap-1 md:flex">
						<ul className="flex items-center gap-0.5 rounded-full border border-border/60 bg-background/40 p-1">
							{links.map(({ to, label }) => {
								const isActive = pathname === to;
								return (
									<li key={to}>
										<Link
											to={to}
											className={cn(
												"relative inline-flex h-8 items-center rounded-full px-3.5 text-sm transition-colors",
												isActive
													? "bg-primary/10 text-foreground"
													: "text-muted-foreground hover:text-foreground",
											)}
										>
											{label}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="hidden items-center gap-1 md:flex">
						<a
							href={APP.links.githubRepo}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
						>
							<svg
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="size-4 fill-current"
							>
								<title>GitHub</title>
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
							</svg>
						</a>

						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							aria-label={
								theme === "dark"
									? "Switch to light mode"
									: "Switch to dark mode"
							}
							className="size-9 rounded-full text-muted-foreground hover:text-foreground"
						>
							{theme === "dark" ? (
								<Sun className="size-4" />
							) : (
								<Moon className="size-4" />
							)}
						</Button>

						<Button
							asChild
							size="sm"
							className="ml-2 rounded-full px-4 shadow-glow"
						>
							<a
								href={APP.links.googlePlay}
								target="_blank"
								rel="noopener noreferrer"
							>
								Get the app
								<ArrowUpRight className="size-3.5" />
							</a>
						</Button>
					</div>

					<div className="flex items-center gap-1 md:hidden">
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							aria-label={
								theme === "dark"
									? "Switch to light mode"
									: "Switch to dark mode"
							}
							className="size-9 rounded-full text-muted-foreground"
						>
							{theme === "dark" ? (
								<Sun className="size-4" />
							) : (
								<Moon className="size-4" />
							)}
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									aria-label="Open menu"
									className="size-9 rounded-full text-muted-foreground"
								>
									<Menu className="size-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-52">
								{links.map(({ to, label }) => (
									<DropdownMenuItem key={to} asChild>
										<Link
											to={to}
											className={cn(
												"cursor-pointer",
												pathname === to ? "text-foreground" : "",
											)}
										>
											{label}
										</Link>
									</DropdownMenuItem>
								))}
								<DropdownMenuItem asChild>
									<a
										href={APP.links.githubRepo}
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer"
									>
										GitHub
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<a
										href={APP.links.googlePlay}
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer text-primary"
									>
										Get the app
									</a>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</nav>
			</div>
		</header>
	);
}
