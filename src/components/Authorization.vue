<template>
  <div class="container2">
		<div class="wrapp">
			<div class="login">
				<img class="login__logo" src="../assets/logo.svg" alt="logo" />
				<h1 class="login__title">Вход</h1>
				<form>
					<div class="login__input-space">
						<label class="login__label" for="login">Логин</label>
						<input v-model="userName" class="login__input" type="text" id="login"/>
					</div>
					<div class="login__input-space">
						<label class="login__label" for="password">Пароль</label>
						<div class="login__input-wrapper">
							<input @input="borderInput" v-model="userPassword" v-if="!showPass" class="login__input" type="password" id="password"/>
							<input v-model="userPassword" v-else class="login__input" type="text" id="password"/>
							<icon v-if="togglePass" @click="togglePassword" name="off" class="login__show-password"></icon>
							<icon v-else @click="togglePassword" name="on" class="login__show-password"></icon>
							</div>
					</div>
				</form>
				<button @click="login(userName, userPassword)" class="login__btn">Войти</button>
			</div>
		</div>
  </div>
</template>

<script>
import Icon from './Icon.vue'
import userData from '../userData.json' 
import router from '../router/index.js'

export default {
  data() {
    return {
			togglePass: true,
			showPass: false,
			userPassword: '',
			userName: '',
		}
  },
	methods: {
		togglePassword() {
			this.togglePass = !this.togglePass,
			this.showPass = !this.showPass
		},
		login(username, password) {
			userData.forEach(element => {
				if (username == element.username && password == element.password) {
					if(!element.token) element.token = this.generate();
					localStorage.setItem('token', element.token);
					router.push('/youtube-search/:home')
				}
			})
		},
		generate() {
			let result = '';
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const len = characters.length;
			for ( let i = 0; i < 30; i++ ) {
				result += characters.charAt(Math.floor(Math.random() * len));
			}
			return result;
		},
	},
		components: {
			Icon,
		},
	}
</script>

<style scoped lang="scss">
.wrapp {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
}
.login {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 510px;
  margin: auto auto;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
	background-color: #fff;
  
  &__logo {
		width: 88px;
		margin: 40px 0px 32px 0px;
  }

  &__title {
		font-weight: 500;
		font-size: 18px;
		margin: 0px 0px 20px 0px;
  }

  &__input-space {
		display: flex;
		flex-direction: column;
		margin: 0px 0px 20px 0px;

		&:last-child {
			margin: 0px 0px 40px 0px;
		}
  }

  &__label {
		font-size: 16px;
		color: #B9B9BA;
		margin: 0px 0px 8px 0px;
  }

	&__input-wrapper {
		position: relative;
	}

	&__show-password {
		background-color: #fff;
		position: absolute;
		top: 50%;
		right: 2%;
		transform: translate(-50%, -50%);
		stroke: #D1D1D1;
		cursor: pointer;
	}

	&__hide-password {
		display: none;
	}

  &__input {
		width: 334px;
		border: 1px solid #D1D1D1;
		border-radius: 10px;
		font-size: 20px;
		padding: 12px 15px 12px 15px;
		
		&:focus{
			background-color: #EEF7FD;
			border: 1px solid #1390E5;
		}

		&:focus ~ .login__show-password {
			background-color: #EEF7FD;
			stroke: #1390E5;
		}

		&:last-child {
			position: relative;
		}
  }

	&__btn {
		background-color: #1390E5;
		color: #fff;
		font-size: 20px;
		padding: 14px 60px 14px 60px;
		border-radius: 10px;
		margin: 0px 0px 60px 0px;
	}
}
</style>