<template>
	<div id="app">
		<div class="nav">
			<router-link to="/hello">hello</router-link>
			<router-link to="/hi">hi</router-link>
			<router-link to="/usr/456">usr</router-link>
		</div>
		<transition name="fade">
			<router-view></router-view>
		</transition>

		<h2 style="margin-top: 40px">{{$store.getters.fullName}}</h2>
	</div>
</template>

<script>
export default {
	mounted() {
		let i = 0;
		this.$store.dispatch('updateCountAsync', { // 异步修改
			num: 5,
			time: 1000
		});
		// setInterval(()=>{
		// 	// this.$store.commit('updateCount', i++); // 同步修改
		// }, 100);
	}
}
</script>

<style lang="stylus" scoped>
#app
	width 100%
	height 100%
	text-align center
	.nav
		font-size 20px
		width 100%
		height 50px
		text-align center
		a
			text-decoration none
			color #999
		.router-link-active
			color #666
</style>
