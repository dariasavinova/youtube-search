<template>
	<div class="container">
		<div class="item">
			<iframe class="item__video" width="245" height="137" :src="src" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube" />
			<div class="item__flex">
				<h2 class="item__title">{{ title }}</h2>
				<h3 class="item__channel">{{ channel }}</h3>
				<h3 class="item__views"> {{ info }} просмотров </h3>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			info: [],
			title: this.video.snippet.title,
			channel: this.video.snippet.channelTitle,
		}
	},
	methods: {
		calcViewsCount(views){
			let postfix = ''
			let value = parseInt(views)
			const sub = Math.floor(value/1000)
			if (sub >= 1000000) {
				postfix = 'млрд'
				value = Math.floor(value/1000000000)
			} else if(sub >= 1000){
				postfix = 'млн'
				value = Math.floor(value/1000000)
			} else if(sub >= 1){
				postfix = 'тыс.'
				value = Math.floor(value/1000)
			}
			return `${value} ${postfix}`
		}
	},
	props: ['video'],
	computed: {
		src() {
			const ids = this.video.id.videoId
			const key = 'AIzaSyBFSbXJlvyiK571FS26gRQcPM-mGirK2zk'
			axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${key}&part=statistics`).then(response => {
				this.info = this.calcViewsCount(response.data.items[0].statistics.viewCount)
			})
  		return `https:/youtube.com/embed/${this.video.id.videoId}`
		},
	}
}
</script>

<style scoped lang="scss">
.container {
	max-width: 1040px;
	margin: 0 auto;
	position: relative;
	height: 100%;
}
.item {
	max-width: 245px;
	height: 100%;
	&__video {
		margin: 0px 0px 8px 0px;
		border-radius: 10px;
	}
	&__flex {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
	&__title {
		margin: 0px 0px 8px 0px;
		max-height: 28px;
		overflow: hidden;
		font-size: 14px;
		font-weight: 500;
		color: #272727;
		flex: 1 1 auto;
	}
	&__channel {
		margin: 0px 0px 2px 0px;
		max-height: 17px;
		line-height: 1.2;
		font-size: 14px;
		font-weight: 400;
		color: #B6B6B7;
		overflow: hidden;
	}
	&__views {
		margin: 0px 0px 8px 0px;
		max-height: 15px;
		font-size: 14px;
		font-weight: 400;
		color: #B6B6B7;
	}
}
</style>