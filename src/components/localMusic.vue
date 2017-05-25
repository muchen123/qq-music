<template>
	<div class="like">
		<div id="fly">
			<div class="like-top">
				<b onclick="window.history.go(-1)">←</b>
				<span>本地歌曲</span>
				<i>...</i>
			</div>
			<div class="classity">
				<p class="border-active">单曲37</p>
				<p>专辑0</p>
				<p>歌单0</p>
				<p>MV0</p>
			</div>
			<div class="like-search">
				<input type="text" placeholder="搜索我喜欢的歌曲" id="like-search-ipt">
			</div>
		</div>
		<div class="songsheet">
			<div class="every" v-for="(item,index) in list">
				<div>
					<p>{{item.song}}</p>
					<span>{{item.name}}</span>
				</div>
				<b>...</b>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			fetch('http://localhost:8080/src/assets/data/songsheet.json').then((res)=>{
				if(res.ok){
					res.json().then((data)=>{
						this.list=data;
						//console.log(this.list)
					})
				}else{
					console.log('数据请求失败')
				}
			})
		}
	}
</script>
<style>
	.like{
		margin-bottom: 4rem;
	}
	.like-top{
		padding: 0 1rem 0;
		height: 3.5rem;
		background: #31c27c;
		color: #fff;
		line-height: 3.5rem;
		text-align: center;
	}
	.like-top b{
		float: left;
	}
	.like-top i{
		float: right;
	}
	.classity{
		height: 3rem;
		border-bottom: 1px #eee solid;
		display: flex;
		justify-content: space-around;
		line-height: 3rem;
		font-size: .9rem;
		/*margin-top: 2rem;*/
	}
	.border-active{
		color:#31c27c;
		border-bottom: .2rem #31c27c solid
	}
	.like-search{
		height: 3rem;
		border-bottom: 1px #eee solid;
		line-height: 3rem;
		text-align: center;
	}
	#like-search-ipt{
		width: 95%;
		height: 1.5rem;
		background: #f0f0f0;
		outline: none;
		padding-left: .5rem;
	}
	#like-search-ipt::-webkit-input-placeholder {
		color: #999; 
	} 
    .songsheet{
    	margin-top:10rem; 
    }
	.songsheet .every{
		height: 3.5rem;
		padding-left:1rem;
		border-bottom: 1px #eee solid
	}
	.every div{
		float: left;
	}
	.every div p{
		margin:.8rem 0 .2rem;
	}
	.every div span{
		font-size: .8rem;
		color: #999
	}
	.every b{
		float: right;
		margin-right: 1rem;
		line-height: 3.5rem;
		color: 999;
		letter-spacing: .3rem;
	}
	#fly{
		width: 100%;
		position: fixed;
		top: 0;
		background: #fff;

	}
</style>