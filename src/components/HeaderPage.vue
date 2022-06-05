<template>
  <div class="header">
    <div class="container">
      <div class="header__links">
        <img class="header__logo" src="../assets/logo.svg" alt="logo" />
				<nav class="header__nav">
					<router-link class="header__link" to="/home">Поиск</router-link>
				</nav>
      </div>
			<router-link class="header__logoff" to="/">Выйти</router-link>
			
    </div>
  </div>
</template>

<script>
import router from '../router/index.js'
export default {
	data() {
		return {
		}
	},
	methods: {
	},
};
</script>

<style scoped lang="scss">
.header {
	background-color: #fff;
	padding: 16px 0px 16px 0px;
		&__links {
			display: flex;
			align-items: center;
		}

		&__logo {
			width: 48px;
			margin: 0px 40px 0px 0px;
		}

		&__nav {
			display: flex;
		}

		&__link {
			color: #BEBEBE;
			font-size: 18px;
			margin: 0px 40px 0px 0px;
			&:last-child {
				margin: 0px 0px 0px 0px;
			}
		}
		
		&__logoff {
			font-size: 18px;
			color: #1390E5;
		}
}
.container {
	max-width: 1040px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.active {
	color: #1390E5;
	position: relative;

	&::after {
	content: '';
	height: 2px;
	width: 100%;
	position: absolute;
	top: 48px;
	left: 0;
	background-color: #1390E5;
	}
}
</style>