<script>
	export let data;
	$: ({ weatherData } = data);
	console.log(data);
</script>

<div class="center">
	<h1>{weatherData.current.temperature_2m}°C</h1>
	{#if weatherData.current.weathercode = 0}
		<h2>Clear</h2>
	{:else if weatherData.current.weathercode = 1}
		<h2>Mainly Clear</h2>
	{:else if weatherData.current.weathercode = 2}
		<h2>Partly Cloudy</h2>
	{:else if weatherData.current.weathercode = 3}
		<h2>Overcast</h2>
	{:else if weatherData.current.weathercode = 45}
		<h2>Fog</h2>
	{:else if weatherData.current.weathercode = 48}
		<h2>Depositing Rime Fog</h2>
	{:else if weatherData.current.weathercode = 51}
		<h2>Light Drizzle</h2>
	{:else if weatherData.current.weathercode = 53}
		<h2>Moderate Drizzle</h2>
	{:else if weatherData.current.weathercode = 55}
		<h2>Dense Drizzle</h2>
	{:else if weatherData.current.weathercode = 56}
		<h2>Light Freezing Drizzle</h2>
	{:else if weatherData.current.weathercode = 57}
		<h2>Dense Freezing Drizzle</h2>
	{:else if weatherData.current.weathercode = 61}
		<h2>Slight Rain</h2>
	{:else if weatherData.current.weathercode = 63}
		<h2>Moderate Rain</h2>
	{:else if weatherData.current.weathercode = 65}
		<h2>Heavy Rain</h2>
	{:else if weatherData.current.weathercode = 66}
		<h2>Light Freezing Rain</h2>
	{:else if weatherData.current.weathercode = 67}
		<h2>Heavy Freezing Rain</h2>
	{:else if weatherData.current.weathercode = 71}
		<h2>Slight Snowfall</h2>
	{:else if weatherData.current.weathercode = 73}
		<h2>Moderate Snowfall</h2>
	{:else if weatherData.current.weathercode = 75}
		<h2>Heavy Snowfall</h2>
	{:else if weatherData.current.weathercode = 77}
		<h2>Snow Grains</h2>
	{:else if weatherData.current.weathercode = 80}
		<h2>Slight Rain Showers</h2>
	{:else if weatherData.current.weathercode = 81}
		<h2>Moderate Rain Showers</h2>
	{:else if weatherData.current.weathercode = 82}
		<h2>Violent Rain Showers</h2>
	{:else if weatherData.current.weathercode = 85}
		<h2>Slight Snow Showers</h2>
	{:else if weatherData.current.weathercode = 86}
		<h2>Heavy Snow Showers</h2>
	{:else if weatherData.current.weathercode = 95}
		<h2>Thunderstorm</h2>
	{:else if weatherData.current.weathercode = 96}
		<h2>Thunderstorm with Slight Hail</h2>
	{:else if weatherData.current.weathercode = 99}
		<h2>Thunderstorm with Heavy Hail</h2>
	{:else}
		<p>Weather Condition Not Found</p>
	{/if}
	<h2>Longitude: {weatherData.longitude}</h2>
	<h2>Cloud Cover: {weatherData.current.cloudcover}</h2>
	<h2>Rain: {weatherData.current.rain}</h2>
</div>


<style>
	h1 {
		font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 30px;
	}

	.center {
		margin: auto;
		width: 10%;
	}
</style>
