<template>
	<div class="dummy-height">
		<h1>isScrolling: {{ isScrolling }} - {{y}}</h1>

	</div>
</template>

<script>
import useNavigation from "~/composables/useNavigation";

export default {
	setup() {
		const { isScrolling, y } = useNavigation();

		return {
			isScrolling,
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