import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	prerender: [
		'/',
		'/a-propos',
		'/services/habillage-ba13',
		'/services/cloisons-seches',
		'/services/faux-plafond',
		'/services/faux-plafond-demontable',
	],
} satisfies Config;
