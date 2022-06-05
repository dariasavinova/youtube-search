<template>
	<div>
		<headerpage></headerpage>
		<search @search="searchVideos"></search>
		<videogroup :videos="info"></videogroup>	
	</div>
</template>

<script>
import Headerpage from './HeaderPage.vue'
import Search from './SearchItem.vue'
import Videogroup from './VideoGroup.vue'
import axios from 'axios'
export default {
	data() {
		return {
			info: '',
			userSearchRequest: '',
		}
	},
	methods: {
		searchVideos(query) {
			this.expanded = true
			const key = 'AIzaSyBFSbXJlvyiK571FS26gRQcPM-mGirK2zk'
			axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${query}&maxResults=12&part=snippet&chart=mostPopular`).then(response => {
				this.info = response.data.items
			})
		},
},
	components: {
		Headerpage,
		Search,
		Videogroup,
	},
}
</script>

<style scoped lang="scss">
.input {
	position: fixed;
	top: 80px;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: auto;
}
.inputtype {
	background-color: #970018;
	color: #fff;
}
.video {
	position: fixed;
	top: 150px;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: auto;
}
</style>