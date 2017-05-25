<template>
	<div class="hot">
		<div class="hot-more">
			<h1>热门推荐</h1>
			<p>></p>
		</div>
		<div class="photo">
			<dl>
				<dt>
					<img src="/src/assets/images/03.jpg">
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>每日新歌：陈伟霆带你玩转港风复古趴</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/04.jpg">
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>今天也要元气满满！为你注入奇妙能力曲儿</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/05.jpg">
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>跨界歌王2 | 原唱收集</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/06.jpg">
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>达人周末 | 华语最耐听的两字深情情歌</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/07.jpg">
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>『纯音』倾听那些让人宁静的旋律</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/02.jpg">
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>华语 | 励志心语 我的字典里没有放弃</dd>
			</dl>
		</div>
	</div>
</template>
<script></script>
<style>
	.hot{
		margin-top: 1.5rem;
	}
	.hot-more{
		overflow: hidden;
	}
	.hot-more h1{
		float: left;
		margin-left: 40%;
		letter-spacing: .5rem;
		margin-bottom: 1rem;
	}
	.hot-more p{
		width: 1rem;
		height: 1rem;
		border: 1px #797979 solid;
		border-radius: 50%;
		font-size: 1.2rem;
		line-height: .9rem;
		text-align: center;
		float: right;
		margin-right: 1rem;
	}
	.photo{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.hot dl{
		width: 33.3%;
		
		margin-bottom: 1rem;
	}
	.hot dl dt img{
		width: 100%;
		height: 8rem;
	}
	.hot dl dd{
		font-size: .7rem;
		line-height: 1.1rem;
	}
	.hot dl dt{
		position: relative;
	}
	.hot dl dt i{
		position: absolute;
		bottom: .5rem;
		color: #eee;
		right: .5rem;
	}
</style>