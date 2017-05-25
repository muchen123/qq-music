<template>
  <div id="app">
    <audio ref='audio' src="http://m2.music.126.net/7o5D4dA6271VktgawcbZFA==/18665309393829604.mp3"></audio>
    <navbar v-show="getNav"></navbar>
    <router-view></router-view>
    <footbar v-show="getFoot"></footbar>
    <sides></sides>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footbar from './components/footbar.vue';
import sides from './components/sides.vue';
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'fd'
    }
  },
  components:{
    navbar,footbar,sides
  },
  mounted(){
    this.$store.dispatch('addDom',this.$refs.audio)
    //console.log(this.$refs.audio)
    this.ifShow(this.$route.path);
  },
  watch:{
    $route(to){
      this.ifShow(to.path)
      
    }
  },
  methods:{
    ifShow(path){
      //let path = to.path;
      if(/download|hall/.test(path)){
        this.$store.dispatch('showNav');
        this.$store.dispatch('showFoot');
        //console.log(this.$store.getters.getNav);
      }else if (/iLike|Musics|localMusic/.test(path)) {
        this.$store.dispatch('hideNav');
        this.$store.dispatch('showFoot');
      }
    }
  },
  computed:mapGetters(['getNav','getFoot'])
}
</script>
<style>
  
</style>
