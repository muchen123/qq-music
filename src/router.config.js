import download from './components/download.vue'
import hall from './components/hall.vue'
import sides from './components/sides.vue'
import iLike from './components/iLike.vue'
import localMusic from './components/localMusic.vue'
import Musics from './components/Musics.vue'

const routes = [
	{path:'/download',component:download},
	{path:'/hall',component:hall},
	{path:'/sides',component:sides},
	{path:'/iLike',component:iLike},
	{path:'/localMusic',component:localMusic},
	{path:'/Musics',component:Musics},
	{path:'*',redirect:'/download'}
]

export default {
	routes
}