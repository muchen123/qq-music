<template>
	<div class="banner">
	  <ul class="clearfix">
	    <li><img src="/src/assets/images/05.jpg" alt=""/></li>
	    <li><img src="/src/assets/images/06.jpg" alt=""/></li>
	    <li><img src="/src/assets/images/07.jpg" alt=""/></li>
	    <li><img src="/src/assets/images/08.jpg" alt=""/> </li>
	    <li><img src="/src/assets/images/09.jpg" alt=""/></li>
	    <li><img src="/src/assets/images/10.jpg" alt=""/></li>
	    <li><img src="/src/assets/images/11.jpg" alt=""/></li>
	    <li><img src="/src/assets/images/12.jpg" alt=""/> </li>
	  </ul>

    </div>
</template>
<script>
	export default{
	mounted(){
	    var mySwipe=new Swipe($('.banner')[0],{
	        auto:3000,
	        continuous:true,
	        stopPropation:true,
	        callback:function (index,element){
	          $('.banner ol li').removeClass('active');
	          $('.banner ol li').eq(index).addClass('active');
	        }
	    })
    }
}
</script>
<style>
.banner{position: relative; overflow: hidden; z-index: 1}
.banner ul li{float:left;position: relative}
.banner li img{width:100%; display:block;height: 10rem}

</style>