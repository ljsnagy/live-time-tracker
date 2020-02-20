<script>
	import TimeSheetInput from './components/TimeSheetInput.svelte';
	import Activity from './components/Activity.svelte';

	let activities = [];
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

<div class="container">
	<header>
		<h1>Live Time Tracker</h1>
		<TimeSheetInput on:parse="{(e) => { activities = e.detail; }}"/>
	</header>

	<main>
		{#each activities as { name, minutes }}
			<Activity {name} {minutes} />
		{/each}
	</main>
</div>	