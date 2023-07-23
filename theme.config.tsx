import { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
	logo: (
		<div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
			<img width="30" height="30" src="https://cdn.discordapp.com/icons/950993900720492574/d56dcdcc7d1baf26a39ff6f8e0900478.webp?size=96" alt="" />
			<span style={{ fontWeight: 'bold', fontSize: 18 }}>Active Courses</span>
		</div>
	),

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
