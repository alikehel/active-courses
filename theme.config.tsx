import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
	logo: (
		<div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
			<img width="30" height="30" src="https://cdn.discordapp.com/icons/950993900720492574/d56dcdcc7d1baf26a39ff6f8e0900478.webp?size=96" alt="" />
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
				<link rel="icon" type="image/webp" href="/logo.webp"/>
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
		{ locale: 'ar', text: 'العربية', direction: 'rtl' },
	],
	search: {
		placeholder: 'Search',
	},
};

export default config;
