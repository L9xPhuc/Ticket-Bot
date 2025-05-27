import { sveltekit } from '@sveltejs/kit/vite';
import { I18nPlugin } from '@eartharoid/vite-plugin-i18n';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		I18nPlugin({
			id_regex: /((?<locale>[a-z0-9-_]+)\/)((_(?<namespace>[a-z0-9-_]+))|[a-z0-9-_]+)\.[a-z]+/i,
			include: 'src/lib/locales/*/*.json'
		})
	],
	server: {
		host: 'ticket.discord.zenkho.top',
		proxy: {
			'/api': {
				target: 'http://localhost:8169',
				changeOrigin: true
			},
			'/attachments': {
				target: 'http://localhost:8169',
				changeOrigin: true
			},
			'/auth': {
				target: 'http://localhost:8169',
				changeOrigin: true
			},
			'/avatars': {
				target: 'http://localhost:8169',
				changeOrigin: true
			},
			'/invite': {
				target: 'http://localhost:8169',
				changeOrigin: true
			}
		}
	}
};

export default config;
