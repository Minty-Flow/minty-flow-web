import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = join(import.meta.dirname, "..", "dist");
const html = readFileSync(join(dist, "index.html"), "utf-8");

/** @type {{ path: string; file: string; title: string; description: string; canonical: string }[]} */
const routes = [
	{
		path: "/",
		file: "index.html",
		title: "Minty Flow — Free, Private Expense Tracker for Android",
		description:
			"Minty Flow is a free, open-source expense tracker that works 100% offline. No account, no ads, no subscriptions. Track income, expenses, and budgets with 60+ themes on Android.",
		canonical: "https://deployed_url_path/",
	},
	{
		path: "/faq",
		file: "faq.html",
		title: "FAQ — Minty Flow",
		description:
			"Answers to common questions about Minty Flow: how it works, privacy, multi-currency, recurring transactions, data export, and more.",
		canonical: "https://deployed_url_path/faq",
	},
	{
		path: "/privacy",
		file: "privacy.html",
		title: "Privacy Policy — Minty Flow",
		description:
			"Minty Flow stores all your data locally on your device. We collect no personal information, use no analytics, and have no servers. Read our full privacy policy.",
		canonical: "https://deployed_url_path/privacy",
	},
	{
		path: "/changelog",
		file: "changelog.html",
		title: "Changelog — Minty Flow",
		description:
			"See what's new in Minty Flow. Every feature release, improvement, and bug fix — documented with each version.",
		canonical: "https://deployed_url_path/changelog",
	},
];

for (const route of routes) {
	let page = html;

	page = page.replace(
		/<title>[\s\S]*?<\/title>/,
		`<title>${route.title}</title>`,
	);
	page = page.replace(
		/(<meta[\s\S]*?name="description"[\s\S]*?content=")[\s\S]*?("[\s\S]*?\/?>)/,
		`$1${route.description}$2`,
	);
	page = page.replace(
		/(<link[\s\S]*?rel="canonical"[\s\S]*?href=")[\s\S]*?("[\s\S]*?\/?>)/,
		`$1${route.canonical}$2`,
	);
	page = page.replace(
		/(<meta[\s\S]*?property="og:url"[\s\S]*?content=")[\s\S]*?("[\s\S]*?\/?>)/,
		`$1${route.canonical}$2`,
	);
	page = page.replace(
		/(<meta[\s\S]*?property="og:title"[\s\S]*?content=")[\s\S]*?("[\s\S]*?\/?>)/,
		`$1${route.title}$2`,
	);
	page = page.replace(
		/(<meta[\s\S]*?property="og:description"[\s\S]*?content=")[\s\S]*?("[\s\S]*?\/?>)/,
		`$1${route.description}$2`,
	);
	page = page.replace(
		/(<meta[\s\S]*?name="twitter:title"[\s\S]*?content=")[\s\S]*?("[\s\S]*?\/?>)/,
		`$1${route.title}$2`,
	);
	page = page.replace(
		/(<meta[\s\S]*?name="twitter:description"[\s\S]*?content=")[\s\S]*?("[\s\S]*?\/?>)/,
		`$1${route.description}$2`,
	);

	writeFileSync(join(dist, route.file), page, "utf-8");
	console.log(`✓ ${route.file}`);
}
