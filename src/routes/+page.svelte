<script>
	export let data;
	$: ({ weatherData } = data);
</script>

<h1>{weatherData.latitude}</h1>

<style>
</style>
