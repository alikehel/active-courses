import Giscus from '@giscus/react';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';
import Authors, { Author } from './components/authors';

const config: DocsThemeConfig = {
	logo: (
		<div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
			<img width="30" height="30" src="/logo-192x192.png" alt="Active Courses Logo" />
			<span style={{ fontWeight: 'bold', fontSize: 18 }}>Active Courses</span>
		</div>
	),
	navigation: {
		prev: false,
		next: false,
	},
	useNextSeoProps: () => ({ titleTemplate: '%s – Active Courses' }),
	head: () => {
		const { asPath, defaultLocale, locale = 'en' } = useRouter();
		const { frontMatter } = useConfig();
		const url = 'https://active-courses.vercel.app' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property="og:title" content={frontMatter.title ? frontMatter.title + ' – Active Courses' : 'Active Courses Discord Server'} />
				<meta property="og:url" content={url} />
				<meta property="og:description" content={frontMatter.description || `Active Courses is a discord server for Studying CSE/CS Subjects, The server's purpose is to imitate college-cult-like by studying a subject from same source at same time.`} />
				{/* <meta httpEquiv="Content-Language" content="en" /> */}
				{/* <meta name="description" content={frontMatter.description} /> */}
				<link rel="icon" type="image/png" href="favicon-16x16.png"></link>
			</>
		);
	},
	project: {
		link: 'https://github.com/alikehel/active-courses',
	},
	chat: {
		link: 'https://discord.gg/QrfTN2Aukx',
	},
	docsRepositoryBase: 'https://github.com/alikehel/active-courses/tree/main',
	footer: {
		text: 'Active Courses © 2023',
	},
	// i18n: [
	// 	{ locale: 'en-US', text: 'English' },
	// 	{ locale: 'ar-EG', text: 'العربية المصرية' },
	// ],
	darkMode: true,
	search: {
		placeholder: 'Search',
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	main: (props) => {
		const { asPath, defaultLocale, locale = 'en' } = useRouter();
		const { frontMatter } = useConfig();

		if (asPath === '/' || asPath === '/blog') {
			return <>{props.children}</>;
		} else if (asPath.includes('/blog/')) {
			return (
				<>
					<h1 dir="rtl" className="text-center nx-mt-4 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
						{frontMatter.title}
					</h1>
					<div dir="rtl">
						<Authors date={frontMatter.date}>
							{frontMatter.authors?.map((author: JSX.IntrinsicAttributes & { name: any; link: any }) => (
								<Author name={author.name} link={author.link} />
							))}
						</Authors>
					</div>
					{props.children}
					<Giscus id="comments" repo="alikehel/active-courses" repoId="R_kgDOJ-AlAA" category="Giscus" categoryId="DIC_kwDOJ-AlAM4CYHc7" mapping="pathname" reactionsEnabled="1" emitMetadata="0" inputPosition="bottom" theme="transparent_dark" lang={locale.slice(0, 2)} loading="lazy" />
				</>
			);
		} else {
			return (
				<>
					{/* {frontMatter.type === 'blog' ? (<p>{frontMatter.title}</p>) : null} */}
					<h1 dir="ltr" className="nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
						{frontMatter.title}
					</h1>
					{props.children}
					<Giscus id="comments" repo="alikehel/active-courses" repoId="R_kgDOJ-AlAA" category="Giscus" categoryId="DIC_kwDOJ-AlAM4CYHc7" mapping="pathname" reactionsEnabled="1" emitMetadata="0" inputPosition="bottom" theme="transparent_dark" lang={locale.slice(0, 2)} loading="lazy" />
					{/* term="Welcome to @giscus/react component!" reactionsEnabled="1" emitMetadata="0" */}
				</>
			);
		}
	},
};

export default config;
