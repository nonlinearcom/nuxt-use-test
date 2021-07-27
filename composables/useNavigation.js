import { watch, ref } from '@nuxtjs/composition-api'
import { useWindowScroll } from '@vueuse/core'


const isScrolling = ref(false)

export default function useNavigation() {

	const { y } = useWindowScroll()
	const OFFSET = 100


	watch(y, () => {
		onScroll()
	})

	function onScroll() {
		console.log(y.value)

		y.value > OFFSET
			? (isScrolling.value = true)
			: (isScrolling.value = false)
	}



	return {
		isScrolling,
		y
	}
}
