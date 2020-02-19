<script>
	import TimeSheetUpload from './components/TimeSheetUpload.svelte';
</script>

<style>
	.container {
		max-width: 960px;
		margin: auto;
	}

	h1 {
		text-align: center;
	}
</style>

<main class="container">
	<header>
		<h1>Live Time Tracker</h1>
		<TimeSheetUpload />
	</header>
</main>	