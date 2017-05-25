<template>
	<div class="everyday">
		<div class="everyday-h">
			<h1>每日为你推荐·30首</h1>
			<p>></p>
		</div>
		<dl>
			<dt><img src="/src/assets/images/02.jpg"></dt>
			<dd>
				<div class="dl-l">
					<p>回头太难</p>
				    <span>张学友·张学友24K Gold金藏集</span>
				</div>
				<div class="dl-r">
					<span>...</span>
				</div>
			</dd>
		</dl>
		<dl>
			<dt><img src="/src/assets/images/03.jpg"></dt>
			<dd>
				<div class="dl-l">
					<p>陪你到天亮</p>
				    <span>童安格·谢谢最深爱的你</span>
				</div>
				<div class="dl-r">
					<span>...</span>
				</div>
			</dd>
		</dl>
		<dl>
			<dt><img src="/src/assets/images/04.jpg"></dt>
			<dd>
				<div class="dl-l">
					<p>我为你唱歌</p>
				    <span>曲婉婷·Say The Words</span>
				</div>
				<div class="dl-r">
					<span>...</span>
				</div>
			</dd>
		</dl>
		<dl>
			<dt><img src="/src/assets/images/05.jpg"></dt>
			<dd>
				<div class="dl-l">
					<p>相见不如怀念</p>
				    <span>樊凡·小爸爸 电视剧原声带</span>
				</div>
				<div class="dl-r">
					<span>...</span>
				</div>
			</dd>
		</dl>
		<dl>
			<dt><img src="/src/assets/images/02.jpg"></dt>
			<dd>
				<div class="dl-l">
					<p>过火</p>
				    <span>张信哲·宽容</span>
				</div>
				<div class="dl-r">
					<span>...</span>
				</div>
			</dd>
		</dl>
		
	</div>
</template>
<script></script>
<style>
	.everyday{
		margin-top: 1rem;
	}
	.everyday-h{
		overflow: hidden;
	}
	.everyday-h h1{
		float: left;
		margin-left: 23%;
		letter-spacing: .5rem;
		margin-bottom: 1rem;
	}
	.everyday-h p{
		width: 1rem;
		height: 1rem;
		border: 1px #797979 solid;
		border-radius: 50%;
		font-size: 1.2rem;
		line-height: .8rem;
		text-align: center;
		float: right;
		margin-right: 1rem;
	}
	.everyday dl{
		overflow: hidden;
	}
	.everyday dl dt{
		float: left;
		margin-right:1rem;
	}
	.everyday dl dt img{
		width: 5rem;
		height: 5em;
	}
	.everyday dl dd{
		float: left;
		width: 71%;
		overflow: hidden;
		font-size: 1rem;
		padding-top: 1.5rem;
		line-height: 1.5rem;
	}
	.dl-l{
		float: left;
	}
	.dl-r{
		float: right;
	}
	.everyday dl dd span{
		color: #999;
		font-size: .9rem;
	}
	
</style>