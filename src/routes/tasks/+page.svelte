<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="m-20">
	<Accordion autocollapse>
		<AccordionItem open>
			<svelte:fragment slot="lead">1</svelte:fragment>
			<svelte:fragment slot="summary">Today's Task</svelte:fragment>
			<svelte:fragment slot="content">Hallo</svelte:fragment>
		</AccordionItem>
		<AccordionItem open>
			<svelte:fragment slot="lead">1</svelte:fragment>
			<svelte:fragment slot="summary">Today's Task</svelte:fragment>
			<svelte:fragment slot="content">Hallo</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
