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
		const url = 'https://active-courses.vercel.app' + asPath;
		// const url = 'https://active-courses.vercel.app' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
		const title = frontMatter.title ? frontMatter.title + ' – Active Courses' : 'Active Courses';
		const description = frontMatter.description || `Active Courses is a discord server for Studying CSE/CS Subjects, The server's purpose is to imitate college-cult-like by studying a subject from same source at same time.`;
		const imageURL = 'https://i.imgur.com/0AKzk2q.png';

		return (
			<>
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="description" content={description} />
				<meta property="og:url" content={url} />
				<meta property="og:image" content={imageURL} />
				{/* <meta httpEquiv="Content-Language" content="en" /> */}
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />
				<meta property="twitter:image" content={imageURL} />
				<meta property="twitter:card" content="summary_large_image" />
				{/* Favicons, meta */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				{/* <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" /> */}
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
		text: (
			<div>
				<p>Active Courses © {new Date().getFullYear()}</p>
				<p>
					Made With 🤍 By{' '}
					<a href="https://www.linkedin.com/in/alikehel/" target="_blank">
						Ali Kehel
					</a>
				</p>
			</div>
		),
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
		const { route } = useRouter();

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
					<Giscus key={route} id="comments" repo="alikehel/active-courses" repoId="R_kgDOJ-AlAA" category="Giscus" categoryId="DIC_kwDOJ-AlAM4CYHc7" mapping="pathname" reactionsEnabled="1" emitMetadata="0" inputPosition="bottom" theme="transparent_dark" lang={locale.slice(0, 2)} loading="lazy" />
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
					<Giscus key={route} id="comments" repo="alikehel/active-courses" repoId="R_kgDOJ-AlAA" category="Giscus" categoryId="DIC_kwDOJ-AlAM4CYHc7" mapping="pathname" reactionsEnabled="1" emitMetadata="0" inputPosition="bottom" theme="transparent_dark" lang={locale.slice(0, 2)} loading="lazy" />
					{/* term="Welcome to @giscus/react component!" reactionsEnabled="1" emitMetadata="0" */}
				</>
			);
		}
	},
};

export default config;
