import App from './App.svelte';

import 'normalize.css';

const app = new App({
	target: document.body,
});

window.app = app;

export default app;