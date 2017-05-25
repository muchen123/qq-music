<template>
	<div class="newsong">
		<div class="newsong-h">
			<h1>新歌速递</h1>
			<p>></p>
		</div>
		<div class="new-s">
			<p><img src="/src/assets/images/02.jpg"/><span>新歌</span></p>
			<p><img src="/src/assets/images/03.jpg"/><span>新碟</span></p>
			<p><img src="/src/assets/images/04.jpg"/><span>影视</span></p>
		</div>
		<div class="newsong-h">
			<h1>精选电台</h1>
			<p>></p>
		</div>
		<div class="transceiver">
			<dl>
				<dt>
					<img src="/src/assets/images/07.jpg"/>
					<span>流行</span>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>
					<p>流行</p>
					<p>Feel Awake - 黄子韬</p>
					<p>没什么是一首流行歌解决不了的</p>
				</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/09.jpg"/>
					<span>放松</span>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>
					<p>放松</p>
					<p>My Soul - 曾轶可</p>
					<p>赶走压抑，美好心情是听出来的</p>
				</dd>
			</dl>
		</div>
		<div class="newsong-h" id="column">
			<h1>专栏</h1>
			<p>></p>
		</div>
		<div class="column">
			<div>
				<img src="/src/assets/images/03.jpg"/>
				<p>股市跌了，房价涨了，你听什么歌？</p>
			</div>
			<div>
				<img src="/src/assets/images/12.jpg"/>
				<p>8090后笑到流泪的深度毁童年</p>
			</div>
			<div>
				<img src="/src/assets/images/10.jpg"/>
				<p>大半个娱乐圈都翻唱过她的歌</p>
			</div>
			<div>
				<img src="/src/assets/images/11.jpg"/>
				<p>你只有一个好妹妹!</p>
			</div>
		</div>
		<div class="newsong-h" id="column">
			<h1>乐人</h1>
			<p>></p>
		</div>
		<div class="musicians">
			<dl>
				<dt>
					<img src="/src/assets/images/07.jpg"/>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>回家路</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/05.jpg"/>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>那些想说的话他们都唱了出来</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/04.jpg"/>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>不露声色</dd>
			</dl>
		</div>
		<div class="newsong-h" id="sweet">
			<h1>甜宠&暖萌,拯救你的少女心</h1>
			<p>></p>
		</div>
		<div class="sweet">
			<dl>
				<dt>
					<img src="/src/assets/images/08.jpg"/>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>
					<p>线(《因为遇见你》电视剧片头曲)</p>
					<p>高颜值鲜肉演绎纯美爱恋</p>
				</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/09.jpg"/>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>
					<p>你好灰姑娘(《漂亮的李慧珍》电视剧片尾曲)</p>
					<p>胡夏倾力演绎灰姑娘华丽蜕变</p>
				</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/03.jpg"/>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>
					<p>当爱来敲门(《放开我 抓紧我》电视剧片尾曲)</p>
					<p>《放开我 抓紧我》的缠绵爱恋</p>
				</dd>
			</dl>
			<dl>
				<dt>
					<img src="/src/assets/images/05.jpg"/>
					<i class="iconfont">&#xe747;</i>
				</dt>
				<dd>
					<p>等(《漂洋过海来看你》电视剧片尾曲)</p>
					<p>嗑糖啦！朱亚文王丽坤高甜片段</p>
				</dd>
			</dl>
		</div>
	</div>
</template>
<script></script>
<style>
	.newsong{
		margin-top: 1rem;
	}
	.newsong-h{
		overflow: hidden;
	}
	.newsong-h h1{
		float: left;
		margin-left: 40%;
		letter-spacing: .5rem;
		margin-bottom: 1rem;
	}
	.newsong-h p{
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
	.new-s{
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.5rem;
	}
	.new-s p{
		width: 33%;
		position: relative;
	}
	.new-s img{
		width: 100%;
		height: 8rem;
		opacity: .7
	}
	.new-s span{
		position: absolute;
		left: 36%;
		bottom: 7%;
		font-size: 1.3rem;
		color: #fff;
	}
	.transceiver{
		margin: 1rem 0;
	}
	.transceiver dl{
		height: 8rem;
		overflow: hidden;
	}
	.transceiver dl dt{
		float: left;
		position: relative;
	}
	.transceiver dl dt img{
		width: 8rem;
		height: 8rem;
	}
	.transceiver dl dd{
		float: left;
		overflow: hidden;
		margin-left: 1rem;
		color: #999;
		line-height: 1.5rem;
		font-size: .9rem;
	}
	.transceiver dl dd p:first-child{
		margin-top: 1.6rem;
		font-size: 1rem;
		color: #000;
		margin-bottom:.5rem;
	}
	.transceiver dl dt span{
		position: absolute;
		bottom: 20%;
		left: 35%;
		font-size: 1.2rem;
		color: #fff;
	}
	.transceiver dl dt i{
		position: absolute;
		bottom: 5%;
		right: 5%;
		color: #ddd;
		font-size: 1.2rem;
	}
	#column h1{
		margin-left: 45%;
	}
	.column{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.column div{
		width: 49.5%;
		margin-bottom:.2rem;
	}
	.column div img{
		width: 100%;
		height: 5rem;
	}
	.column div p{
		font-size: .8rem;
		line-height: 1.3rem;
	}
	.musicians{
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
	.musicians dl{
		width: 33%;

	}
	.musicians dl dt{
		position: relative;
		margin-bottom:.2rem;
	}
	.musicians dl dt img{
		width: 100%;
		height: 8rem;
	}
	.musicians dl dt i{
		position: absolute;
		right: 5%;
		bottom: 3%;
		font-size: 1.2rem;
		color: #ddd;
	}
	.musicians dl dd{
		font-size: .85rem;
		margin-left:.2rem;
		line-height: 1.2rem;
	}
	#sweet h1{
		margin-left: 15%;
	}
	.sweet{
		display: flex;
		justify-content: space-between;;
		flex-wrap: wrap;
		letter-spacing: .2rem;
	}
	.sweet dl{
		width: 49.5%;
		margin-bottom: .2rem;
	}
	.sweet dl dt img{
		width: 100%;
		height: 6rem;
		margin-bottom: .2rem;
	}
	.sweet dl dt{
		position: relative;
	}
	.sweet dl dt i{
		position: absolute;
		right: 3%;
		bottom: 5%;
		font-size: 1.2rem;
		color: #ddd;
	}
	.sweet dl dd{
		font-size: .85rem;
		line-height: 1.2rem;
	}
	.sweet dl dd p:first-child{
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sweet dl dd p:last-child{
		color: #999;
		font-size: .8rem;
	}
</style>