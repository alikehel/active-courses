import Giscus from '@giscus/react';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
	logo: (
		<div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
			<img width="30" height="30" src="/logo.png" alt="Active Courses Logo" />
			<span style={{ fontWeight: 'bold', fontSize: 18 }}>Active Courses</span>
		</div>
	),
	useNextSeoProps: () => ({ titleTemplate: '%s – Active Courses' }),
	head: () => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();
		const url = 'https://active-courses.vercel.app' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property="og:title" content={frontMatter.title ? frontMatter.title + ' – Active Courses' : 'Active Courses Discord Server'} />
				<meta property="og:url" content={url} />
				<meta property="og:description" content={frontMatter.description || `Active Courses is a discord server for Studying CSE/CS Subjects, The server's purpose is to imitate college-cult-like by studying a subject from same source at same time.`} />
				{/* <meta httpEquiv="Content-Language" content="en" /> */}
				{/* <meta name="description" content={frontMatter.description} /> */}
				<link rel="icon" type="image/png" href="/logo.png"></link>
			</>
		);
	},
	project: {
		link: 'https://github.com/alisaber272/active-courses',
	},
	chat: {
		link: 'https://discord.gg/QrfTN2Aukx',
	},
	docsRepositoryBase: 'https://github.com/alisaber272/active-courses/tree/main',
	footer: {
		text: 'Active Courses © 2023',
	},
	i18n: [
		{ locale: 'en', text: 'English' },
		{ locale: 'ar', text: 'العربية' },
	],
	search: {
		placeholder: 'Search',
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	main: (props) => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();

		// if (frontMatter.type === 'blog') {
		// 	return (
		// 		<>
		// 			<p>{frontMatter.title}</p>
		// 		</>
		// 	);
		// }

		return (
			<>
				{/* {frontMatter.type === 'blog' ? (<p>{frontMatter.title}</p>) : null} */}
				{props.children}
				<Giscus id="comments" repo="alisaber272/active-courses" repoId="R_kgDOJ-AlAA" category="Giscus" categoryId="DIC_kwDOJ-AlAM4CYHc7" mapping="pathname" reactionsEnabled="1" emitMetadata="0" inputPosition="bottom" theme="preferred_color_scheme" lang={locale} loading="eager" />
				{/* term="Welcome to @giscus/react component!" reactionsEnabled="1" emitMetadata="0" */}
			</>
		);
	},
};

export default config;
