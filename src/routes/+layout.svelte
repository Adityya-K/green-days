<script>
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<img
			alt="logo"
			width="50px"
			height="50px"
			src="http://drive.google.com/uc?export=view&id=12LN8NZkXhStRtbpQoI4lmqXWA16Az4ml"
		/>
	</svelte:fragment>
	<h1 class="h1">Green Days</h1>
	<svelte:fragment slot="trail">
		<h2>Congrats on being sustainable!</h2>
	</svelte:fragment>
</AppBar>
<slot />

<style>
	.links {
		display: flex;
	}

	li {
		padding-left: 15px;
	}
</style>
