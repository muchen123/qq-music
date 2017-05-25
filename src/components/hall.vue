<template>
	<div class="hall">
		<slide></slide>
		<div class="hall-c">
			<div>
				<i class="iconfont">&#xe60c;</i>
				<span>歌手</span>
			</div>
			<div>
				<i class="iconfont">&#xe604;</i>
				<span>排行</span>
			</div>
			<div>
				<i class="iconfont">&#xe613;</i>
				<span>电台</span>
			</div>
			<div>
				<i class="iconfont">&#xe72f;</i>
				<span>分类歌单</span>
			</div>
			<div>
				<i class="iconfont">&#xe62e;</i>
				<span>视频MV</span>
			</div>
			<div>
				<i class="iconfont">&#xe624;</i>
				<span>数字专辑</span>
			</div>
		</div>
		<hot></hot>
		<everyday></everyday>
		<newsong></newsong>
		<div class="everyday-last"></div>
	</div>
</template>

<script>
	import slide from './slide.vue';
	import hot from './hot.vue';
	import everyday from './everyday.vue';
	import newsong from './newsong.vue';  
	export default{
		components:{
			slide,hot,everyday,newsong
		}
	}
</script>
<style>
	.hall{
		width: 100%;
		height: 100%;
		padding-top: 5.1rem;
	}
	.hall-c{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-left: 1rem;
	}
	.hall-c div{
		width: 6.5rem;
		height: 4rem;
		text-align: left;
		line-height: 6rem;
	}
	.hall-c div i{
		color: #31c27c;
	}
	.everyday-last{
		height: 7rem;
	}
</style>