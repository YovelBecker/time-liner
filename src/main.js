import App from './App.svelte';

console.log('testing')

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;