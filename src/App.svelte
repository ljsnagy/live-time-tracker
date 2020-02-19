<script>
	import TimeSheetInput from './components/TimeSheetInput.svelte';
</script>

<style>
	.container {
		max-width: 960px;
		margin: auto;
		padding: 0 1rem;
	}

	h1 {
		text-align: center;
	}
</style>

<main class="container">
	<header>
		<h1>Live Time Tracker</h1>
		<TimeSheetInput />
	</header>
</main>	