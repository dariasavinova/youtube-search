<template>
<div class="wrapper">
	<div :style="{ height: style.height }" class="container">
		<div :style="{ display: style.display }" class="search">
			<h1 :style="[{ margin: style.margin }, { fontSize: style.fontSize }]" class="search__title">Поиск видео</h1>
			<div class="search__item">
				<input @keyup.enter="search" :style="{ width: style.width }" v-model="userSearchRequest" class="search__input" placeholder="Что хотите посмотреть?" type="text">
				<button @click="search" class="search__btn">Найти</button>
			</div>
		</div>
	</div>
		<div v-if="expanded" class="header">
			<div class="header__result">Видео по запросу <span class="header__request">«{{userSearchRequest}}»</span></div>
			<div class="header__display">
				<icon @click="changeDisplayToFlex" class="header__list" name="list"></icon>
				<icon @click="changeDisplayToGrid" class="header__grid" name="grid"></icon>
			</div>
		</div>
</div>
</template>
<script>
import Icon from './Icon.vue'
export default {
	data() {
		return {
			userSearchRequest: '',
			expanded: false,
		}
	},
	methods: {
		search() {
			this.expanded = true;
			this.$emit('search', this.userSearchRequest);
		},
	},
	computed: {
		style() {
			return {
				width: this.expanded ? '890px' : '536px',
				fontSize: this.expanded ? '28px' : '36px',
				display: this.expanded ? 'block' : 'flex',
				margin: this.expanded ? '40px 0 20px 0' : '220px 0 40px 0',
				height: this.expanded ? '25%' : '75%',
			}
		}
	},
	components: {
		Icon,
	}
}
</script>

<style scoped lang="scss">
.wrapper {
	max-width: 1040px;
	margin: 0 auto;
}
.container {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: auto;
	margin: 0px 0px 40px 0px;
}
.search {
	flex-direction: column;
	align-items: center;
	&__title {
		color: #000;
	}
	&__input {
		border: 1px solid #D1D1D1;
		border-radius: 10px 0 0 10px;
		border-right: none;
		min-width: 536px;
		font-size: 20px;
		padding: 14px 54px 14px 15px;
		&::placeholder {
			color: #BEBEBE;
		}
		&:focus{
			background-color: #EEF7FD;
			border: 1px solid #1390E5;
			border-right-style: none;
		}
	}
	&__btn {
		color: #fff;
		font-size: 20px;
		padding: 15px 46px 15px 46px;
		background-color: #1390E5;
		border-radius: 0 10px 10px 0;
	}
}
.header {
	display: flex;
	justify-content: space-between;
	margin: 0px 0px 8px 0px;
	&__result {
		font-size: 16px;
		color: #272727;
		margin: 0px 0px 20px 0px;
	}
	&__request {
		font-weight: 500;
		font-size: 16px;
		color: #272727;
	}
	&__display {
		display: flex;
		justify-content: space-between;
	}
	&__list {
		margin: 0px 15px 0px 0px;
		cursor: pointer;
	}
	&__grid {
		cursor: pointer;
	}
}
</style>