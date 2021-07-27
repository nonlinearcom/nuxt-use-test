<template>
	<div class="dummy-height">
		<h1>isScrolling: {{y}}</h1>

	</div>
</template>

<script>
import { useWindowScroll } from '@vueuse/core'

export default {
	setup() {
		const { y } = useWindowScroll()

		return {
			y,
		};
	},
};
</script>
<style>
.dummy-height{
	height: 500vh;
	background-color: aquamarine;
}
h1{
	position: fixed;
	top:0;
}

</style>