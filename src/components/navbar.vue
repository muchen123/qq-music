<template>
	<div id="navbar">
		<i class="iconfont" id="more" @click="show">&#xe637;</i>
		<!-- <span id="my">我的</span> -->
		<router-link to="/download" tag="span" id="my" active-class="active">
			我的
		</router-link>
		<router-link to="/hall" tag="span" active-class="active">
			音乐馆
		</router-link>
		<i class="iconfont" id="music">&#xe722;</i>
		<input type="text" id="ipt" placeholder="搜索">
	</div>
</template>
<script>
	export default{
		methods:{
			show(){
				$('#side').animate({
					left:0
				}, 500)
			}
		}
	}
</script>
<style>
	#navbar{
		width: 100%;
		height: 5.1rem;
		background: #31c27c;
		color: #fff;
		font-size: 1rem;
		line-height: 4.1rem;
		padding:0 .3rem;
		position: fixed;
		top: 0;
		box-sizing: border-box;
		overflow: hidden;
		z-index: 999;
	}
	#my{
		margin-right: .5rem;
	}
	#more{
		float: left;
		margin-right: 8.2rem;
		font-size: 1.7rem;
		margin-top: .2rem;
	}
	#music{
		float: right;
		font-size: 1.7rem;
		margin-top: .2rem;
	}
	#ipt{
		position: absolute;
		bottom: .3rem;
		height: 1.4rem;
		left: 0;
		width: 90%;
		background: rgba(44,175,112,.8);
		outline: none;
		color: #fff;
		margin-left: .7rem;
		padding-left: 1rem;
		font-size: .8rem;
		line-height: 1.4rem;
	}
	input::-webkit-input-placeholder{color: #fff; font-size: .9rem;}
	input::-webkit-input-placeholder{text-align: center;}
	.active{
		font-weight: bolder;
	}
</style>