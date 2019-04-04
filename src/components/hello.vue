<template>
	<div class="hello">
		<h1 @click="click">{{msg}}</h1>
		<h3 class="count">hello.$store.state.count: {{this.$store.state.count}}</h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Hello World!'
		}
	},
	components: {},
	methods: {
		click() {
			alert('hello')
		}
	}
}
</script>

<style lang="stylus" scoped>
.hello
	display flex
	flex-direction column
	justify-content center
	h1
		text-align center
		font-size 30px
		color #666
	.count
		text-align center
		margin-top 20px
</style>
