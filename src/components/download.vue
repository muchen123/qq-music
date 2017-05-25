<template>
	<div class="download">
		<div class="download-h">
			<p class="min">
				<i class="iconfont">&#xe65e;</i>
				<span>0分钟</span>
			</p>
			<div class="download-b">
				<img src="/src/assets/images/02.jpg"/>
				<h6>木木</h6>
				<h5></h5>
			</div>
			<p>
				<i class="iconfont">&#xe633;</i>
				<span>开通</span>
			</p>
		</div>
		<div class="download-c">
			<router-link tag="dl" to="localMusic">
				<dt><i class="iconfont">&#xe70f;</i></dt>
				<dd>本地歌曲</dd>
				<p>{{count}}</p>
			</router-link>
			<router-link tag="dl" to="Musics">
				<dt><i class="iconfont">&#xe64c;</i></dt>
				<dd>下载歌曲</dd>
				<p>{{count}}</p>
			</router-link>
			<dl>
				<dt><i class="iconfont">&#xe6db;</i></dt>
				<dd>最近播放</dd>
				<p>200</p>
			</dl>
			<router-link tag="dl" to="iLike">
				<dt><i class="iconfont">&#xe66a;</i></dt>
				<dd>我喜欢</dd>
				<p>{{count}}</p>
			</router-link>
			<dl>
				<dt><i class="iconfont">&#xe6cf;</i></dt>
				<dd>下载MV</dd>
			</dl>
			<dl>
				<dt><i class="iconfont">&#xe6cb;</i></dt>
				<dd>已购音乐</dd>
			</dl>
		</div>
		<div class="style">
			<dl>
				<dt><img src="/src/assets/images/03.jpg"></dt>
				<dd>
					<p>个性电台</p>
					<span>来听听和『一生不变』好听的歌曲吧</span>
				</dd>
				<div><i class="iconfont">&#xe747;</i></div>
			</dl>
			<dl>
				<dt><img src="/src/assets/images/04.jpg"></dt>
				<dd>
					<p>NIKE跑步电台</p>
					<span>新增万首中文跑步歌曲，点燃你的2017！</span>
				</dd>
				<div><i class="iconfont">&#xe747;</i></div>
			</dl>
		</div>
		<div class="last"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				count:0
			}
		},
		mounted(){
			fetch('http://localhost:8080/src/assets/data/songsheet.json').then((res)=>{
				if(res.ok){
					res.json().then((data)=>{
						this.count=data.length
					})
				}else{
					console.log('数据请求失败')
				}
			})
		}
	}
</script>
<style>
	.download{
		height: 23rem;
		padding-top: 5.1rem;
	}
	.download-h{
		height: 9rem;
		background: #fff;
		padding-top: 1.5rem;
		overflow: hidden;
	}
	.download-h p{
		width: 5rem;
		height: 1.5rem;
		border: 1px #797979 solid;
		text-align: center;
		line-height: 1.5rem;
		border-radius: .6rem;
		font-size: .8rem;
		color: #797979;
		float: left;
		margin-top: 1.7rem;
	}
	.download-h p i{
		color: #31c27c;
	}
	.download-b{
		float: left;
		margin:0 1rem;
		position: relative;
	}
	.download-b img{
		width: 5.7rem;
		height: 5.7rem;	
	}
	.download-h .min{
		margin-left: 3.5rem;
	}
	.download-b h6{
		position: absolute;
		width: 3rem;
		height: 1.5rem;
		background: #fff;
		bottom: -.6rem;
		left: 1.3rem;
		text-align: center;
		line-height: 1.5rem;
	}
	.download-b h5{
		height: 1.5rem;
		border-bottom: 1px #000 solid;
	}
	.download-c{
		display: flex;
		justify-content:space-around;
		flex-wrap:wrap;
	}
	.download-c dl{
		width: 6.5rem;
		height: 6rem;
		text-align: center;
	}
	.download-c dl dt{
		height: 3rem;
		
		line-height: 3rem;
	}
	.download-c dl dt i{
		font-size: 2rem;
	}
	.download-c dl dd{
		font-size: .9rem;
		line-height: 1.2rem;
	}
	.download-c dl p{
		color: #666;
		font-size: .7rem;
	}
	.download-c dl dt i{
		color: #31c27c;
	}
	.style{
		height: 9.5rem;
		background: #f4f4f4;
		padding-top: .5rem;
	}
	.style dl{
		height: 4.5rem;
		background: #fff;
		overflow: hidden;
		position: relative;
	}
	.style dl dt{
		float: left;
		margin-right: 1rem;
	}
	.style dl dt img{
		width: 4.5rem;
		height: 4.5rem;
	}
	.style dl dd{
		height: 4.5rem;
		width: 75%;
		float: left;
		overflow: hidden;
		margin-top: 1.3rem;
		line-height: 1.5rem;
		border-bottom: 1px #000 solid;
	}
	.style dl dd span{
		font-size: .8rem;
		color: #cfcfcf;
	}
	.style dl div{
		width: 4.5rem;
		height: 4.5rem;
		background: rgba(179,178,170,.8);
		position: absolute;
		text-align: center;
	}
	.style dl div i{
		font-size: 2rem;
		color: #eee;
		line-height: 4.5rem;
	}
	.last{
		height: 4.5rem;
	}
</style>