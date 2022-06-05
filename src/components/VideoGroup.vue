<template>
	<div class="wrapper"> 
		<div v-for="video in videos" :key="video.id.videoId">
			<videoitem :video="video"></videoitem>
		</div>
	</div>
</template>

<script>
import Videoitem from './VideoItem.vue'
export default {
	props: ['videos'],
	components: {
		Videoitem,
	}
}
</script>

<style scoped lang="scss">
.wrapper {
	max-width: 1040px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
	gap: 20px;
}
</style>
