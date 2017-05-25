const actions ={
	addDom({commit,state},audio){
		commit('add',audio)
	},
	toggleMusic({commit,state}){
		if(state.isPlaying){
			state.dom.pause()
			
		}else {
			state.dom.play()
		}
		commit('toggleMusic')
	},
	showNav({commit,state}){
		commit('SHOW_NAV')
	},
	showFoot({commit,state}){
		commit('SHOW_FOOT')
	},
	hideNav({commit,state}){
		commit('HIDE_NAV')
	},
	hideFoot({commit,state}){
		commit('HIDE_FOOT')
	}
	
};
export default actions;