import { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
	logo: <span>My Project</span>,
	project: {
		link: 'https://github.com/shuding/nextra-docs-template',
	},
	chat: {
		link: 'https://discord.com',
	},
	docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
	footer: {
		text: 'Nextra Docs Template',
	},
	i18n: [
		{ locale: 'en', text: 'English' },
		{ locale: 'ar', text: 'العربية', direction: 'rtl' },
	],
};

export default config;
