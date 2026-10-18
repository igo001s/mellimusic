<script lang="ts">
	// Types
	import type { IconProps } from '#lib/types/components/props.types.ts';

	// Props
	const { iconClass }: IconProps = $props();
</script>

<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class={iconClass}>
	<path
		id="Vector"
		d="M12 17H19M5 12H19M5 7H19"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
