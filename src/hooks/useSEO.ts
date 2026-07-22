import { useEffect } from "react";

interface SEOMeta {
	title: string;
	description: string;
	canonical?: string;
}

export function useSEO({ title, description, canonical }: SEOMeta) {
	useEffect(() => {
		document.title = title;

		const setMeta = (selector: string, attr: string, value: string) => {
			document.querySelector(selector)?.setAttribute(attr, value);
		};

		setMeta('meta[name="description"]', "content", description);
		setMeta('meta[property="og:title"]', "content", title);
		setMeta('meta[property="og:description"]', "content", description);
		setMeta('meta[name="twitter:title"]', "content", title);
		setMeta('meta[name="twitter:description"]', "content", description);

		if (canonical) {
			setMeta('link[rel="canonical"]', "href", canonical);
			setMeta('meta[property="og:url"]', "content", canonical);
		}
	}, [title, description, canonical]);
}
