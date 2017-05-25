<template>
	<div id="side">
		<div class="side-h">
			<dl>
				<dt><i class="iconfont">&#xe633;</i></dt>
				<dd>
					<p>升级为VIP</p>
					<span>畅享音乐特权</span>
				</dd>
			</dl>
			<dl>
				<dt><i class="iconfont">&#xe7a9;</i></dt>
				<dd>
					<p>个性化中心</p>
					<span>默认主题</span>
				</dd>
			</dl>
			<dl>
				<dt><i class="iconfont">&#xe690;</i></dt>
				<dd>
					<p>消息中心</p>
				</dd>
			</dl>
		</div>
		<div class="side-c">
			<div>
				<p>仅Wi-Fi联网</p>
			</div>
			<div>
				<p>简洁模式</p>
			</div>
			<div>
				<p>定时关闭</p>
			</div>
			<div>
				<p>免流量服务</p>
			</div>
			<div>
				<p>仅Wi-Fi联网</p>
			</div>
			<div>
				<p>传歌到手机</p>
			</div>
			<div>
				<p>QPlay与车载音乐</p>
			</div>
			<div>
				<p>清理占用空间</p>
			</div>
			<div>
				<p>免费WIFI</p>
			</div>
			<div>
				<p>关于QQ音乐</p>
			</div>
		</div>
		<div class="groom">
			<p>精品应用推荐</p>
		</div>
		<div class="side-b">
			<div class="side-b-l">
				<i class="iconfont">&#xe611;</i>
				<span>设置</span>
			</div>
			<div class="side-b-r">
				<i class="iconfont">&#xe61d;</i>
				<span @click="hide">退出登录/关闭</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			hide(){
				$('#side').animate({
					left:'-90%'
				},500)
			}
		}
	}
</script>
<style>
	#side{
		width: 82%;
		padding-left: 1rem;
		position: absolute;
		left: -90%;
		top:0;
		z-index: 999;
		background: #fff;
		padding-right: 1rem;
	}
	.side-h{
		display: flex;
		justify-content: space-around;
		padding-top: 1.5rem;
		border-bottom: 1px #ddd solid
	}
	.side-h dl{
		width: 5rem;
		height: 6rem;
		text-align: center;
	}
	.side-h dl dt i{
		font-size: 2.3rem;
		color: #31c27c;
	}
	.side-h dl dd{
		margin-top: .3rem;
		line-height: 1.5rem;
		font-size: .9rem;
	}
	.side-h dl dd span{
		font-size: .8rem;
		color: #999;
	}
	.side-c{
		margin-top: 1rem;
		border-bottom: 1px #ddd solid
	}
	.side-c div{
		height: 2.7rem;
		font-size: .9rem;
		line-height: 3rem;
	}
	.groom{
		height: 5.5rem;
		font-size: .9rem;
		line-height: 4rem;
	}
	.side-b{
		height: 3.5rem;
		line-height: 3.5rem;
		font-size: .9rem;
		border-top: 1px #ddd solid;
	}
	.side-b div i{
		font-size: 1.5rem;
		float: left;
		margin-right: .3rem;
		color: #31c27c;
	}
	.side-b-l{
		float: left;
	}
	.side-b-r{
		float: right;
	}
</style>