<template>
	<div class="hi">
		<h1 @click="click">This is Usr Page , Your ID is {{id}}</h1>
		<h3 class="count">usr.$store.state.count: {{this.$store.state.count}}</h3>
	</div>
</template>

<script>
export default {
  props: ['id'],
	data() {
		return {
			msg: 'hi World!'
		}
	},
	components: {},
	methods: {
		click() {
			alert('hi')
		}
	}
}
</script>

<style lang="stylus" scoped>
.hi
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
