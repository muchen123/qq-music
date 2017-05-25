<template>
	<div class="footbar">
		<img src="/src/assets/images/04.jpg"/>
		<div class="footbar-c">
			<p>成都</p>
			<span>左右横滑可切换上下首</span>
		</div>
		<div class="footbar-r">
			<i class="iconfont" @click="toggleMusic">{{isPlaying?'&#xe605;':'&#xe747;'}}</i>
			<i class="iconfont">&#xe637;</i>
		</div>
	</div>
</template>
<script>
	import {mapActions,mapGetters} from 'vuex'
	export default{
		methods:mapActions(['toggleMusic']),
		computed:mapGetters(['isPlaying'])
	}
</script>
<style>
	.footbar{
		width: 100%;
		height: 4rem;
		position: fixed;
		bottom: 0;
		border-top: 1px #ddd solid;
		background: #fff;
	}
	.footbar img{
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		margin:.5rem;
		float: left;
	}
	.footbar-c{
		float: left;
		padding-top: .8rem;
		line-height: 1.5rem;
	}
	.footbar-c span{
		font-size: .8rem;
		color: #31c27c;
	}
	.footbar-r{
		float: right;
		line-height: 4rem;
	}
	.footbar-r i{
		font-size: 2rem;
		margin-right: 1rem;
		color: #31c27c;
	}
</style>