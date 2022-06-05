<template>
  <div class="wrapper">
    <div class="container">
			 <router-view />
    </div>
  </div>
</template>

<script>
import MinimalizeStyles from "./styles/minimalize.module.css";
export default {
  data() {
    return {};
  },
}
</script>

<style scoped lang="scss">
.wrapper {
	background-color: #FAFAFA;
	height: 100vh;
}
</style>