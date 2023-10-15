<script>
	import { Accordion, AccordionItem, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import suggestions from '../suggestions.json';

	export let data;
	let value1 = 0;
	let value2 = 0;
	$: ({ weatherData } = data);
</script>

<div class="center pt-20">
	<h1>{weatherData.current.temperature_2m}°C</h1>
	{#if (weatherData.current.weathercode = 0)}
		<img src="https://cdn-icons-png.flaticon.com/512/1400/1400310.png" alt="icon" />
		<h2>Clear</h2>
	{:else if (weatherData.current.weathercode = 1)}
		<img
			src="https://www.iconarchive.com/download/i107712/google/noto-emoji-travel-places/42664-sun-behind-small-cloud.1024.png"
			alt="icon"
		/>
		<h2>Mainly Clear</h2>
	{:else if (weatherData.current.weathercode = 2)}
		<img
			src="https://www.iconarchive.com/download/i107712/google/noto-emoji-travel-places/42664-sun-behind-small-cloud.1024.png"
			alt="icon"
		/>
		<h2>Partly Cloudy</h2>
	{:else if (weatherData.current.weathercode = 3)}
		<img src="https://cdn-icons-png.flaticon.com/512/7084/7084499.png" alt="icon" />
		<h2>Overcast</h2>
	{:else if (weatherData.current.weathercode = 45)}
		<img
			src="https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-49-2682802_90798.png"
			alt="icon"
		/>
		<h2>Fog</h2>
	{:else if (weatherData.current.weathercode = 48)}
		<img
			src="https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-49-2682802_90798.png"
			alt="icon"
		/>
		<h2>Depositing Rime Fog</h2>
	{:else if (weatherData.current.weathercode = 51)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Light Drizzle</h2>
	{:else if (weatherData.current.weathercode = 53)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Moderate Drizzle</h2>
	{:else if (weatherData.current.weathercode = 55)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Dense Drizzle</h2>
	{:else if (weatherData.current.weathercode = 56)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Light Freezing Drizzle</h2>
	{:else if (weatherData.current.weathercode = 57)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Dense Freezing Drizzle</h2>
	{:else if (weatherData.current.weathercode = 61)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Slight Rain</h2>
	{:else if (weatherData.current.weathercode = 63)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Moderate Rain</h2>
	{:else if (weatherData.current.weathercode = 65)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Heavy Rain</h2>
	{:else if (weatherData.current.weathercode = 66)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Light Freezing Rain</h2>
	{:else if (weatherData.current.weathercode = 67)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Heavy Freezing Rain</h2>
	{:else if (weatherData.current.weathercode = 71)}
		<img
			src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-snow-512.png"
			alt="icon"
		/>
		<h2>Slight Snowfall</h2>
	{:else if (weatherData.current.weathercode = 73)}
		<img
			src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-snow-512.png"
			alt="icon"
		/>
		<h2>Moderate Snowfall</h2>
	{:else if (weatherData.current.weathercode = 75)}
		<img
			src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-snow-512.png"
			alt="icon"
		/>
		<h2>Heavy Snowfall</h2>
	{:else if (weatherData.current.weathercode = 77)}
		<img
			src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-snow-512.png"
			alt="icon"
		/>
		<h2>Snow Grains</h2>
	{:else if (weatherData.current.weathercode = 80)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Slight Rain Showers</h2>
	{:else if (weatherData.current.weathercode = 81)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Moderate Rain Showers</h2>
	{:else if (weatherData.current.weathercode = 82)}
		<img
			src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png"
			alt="icon"
		/>
		<h2>Violent Rain Showers</h2>
	{:else if (weatherData.current.weathercode = 85)}
		<img
			src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-snow-512.png"
			alt="icon"
		/>
		<h2>Slight Snow Showers</h2>
	{:else if (weatherData.current.weathercode = 86)}
		<img
			src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-snow-512.png"
			alt="icon"
		/>
		<h2>Heavy Snow Showers</h2>
	{:else if (weatherData.current.weathercode = 95)}
		<img
			src="https://cdn4.iconfinder.com/data/icons/weather-717/64/thunderstorm-sun-storm-rain-weather-cloud-512.png"
			alt="icon"
		/>
		<h2>Thunderstorm</h2>
	{:else if (weatherData.current.weathercode = 96)}
		<img
			src="https://cdn4.iconfinder.com/data/icons/weather-717/64/thunderstorm-sun-storm-rain-weather-cloud-512.png"
			alt="icon"
		/>
		<h2>Thunderstorm with Slight Hail</h2>
	{:else if (weatherData.current.weathercode = 99)}
		<img
			src="https://cdn4.iconfinder.com/data/icons/weather-717/64/thunderstorm-sun-storm-rain-weather-cloud-512.png"
			alt="icon"
		/>
		<h2>Thunderstorm with Heavy Hail</h2>
	{:else}
		<h2>Weather Condition Not Found</h2>
	{/if}
	<br>
	<h2>Latitude: {weatherData.latitude}</h2>
	<br>
	<h2>Longitude: {weatherData.longitude}</h2>
</div>
<div class="m-20">
	<Accordion autocollapse>
		<AccordionItem open>
			<svelte:fragment slot="lead">1</svelte:fragment>
			<svelte:fragment slot="summary">
				<div class="flex">
					<h3 class="pt-3 pr-4">Suggestion for today!</h3>
					<RadioGroup>
						<RadioItem bind:group={value1} name="justify" value={0}>Not Done</RadioItem>
						<RadioItem bind:group={value1} name="justify" value={1}>Done</RadioItem>
					</RadioGroup>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="content">
				{suggestions[weatherData.current.weathercode].Suggestions}
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem open>
			<svelte:fragment slot="lead">2</svelte:fragment>
			<svelte:fragment slot="summary">
				<div class="flex">
					<h3 class="pt-3 pr-4">Hello</h3>
					<RadioGroup>
						<RadioItem bind:group={value2} name="justify" value={0}>Not Done</RadioItem>
						<RadioItem bind:group={value2} name="justify" value={1}>Done</RadioItem>
					</RadioGroup>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="content">
				{suggestions[weatherData.current.weathercode['']]}
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
{#if value1 === 1 && value2 === 1}
	<aside class="alert variant-filled-error fixed bottom-0 left-0 w-screen">
		<!-- Icon -->
		<div><img
			class="congrat-icon"
			src="https://cdn-icons-png.flaticon.com/512/7963/7963920.png"
			alt="icon"
		/></div>
		<!-- Message -->
		<div class="alert-message">
			<h3 class="h3">Congratulations!</h3>
			<p>You've officially made today green!</p>
		</div>
		<!-- Actions -->
		<div class="alert-actions">X</div>
	</aside>
{/if}

<style>
	h1 {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 30px;
	}

	.center {
		margin: auto;
		text-align: center;
		object-position: center;
		width: 20%;
	}

	img {
		position: relative;
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
		margin-bottom: 20px;
		max-width: 100%;
	}

	.congrat-icon {
		max-width: 60px;
	}
</style>
